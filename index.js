const express = require('express');
const Web3 = require('web3').default;
const path = require('path');

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos (HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Conectar a Ganache
const web3 = new Web3('http://127.0.0.1:7545');
const contractABI = require('./build/contracts/TransportTraceability.json').abi;
const contractAddress = '0x05a199e2aC943E931b378A1901ecD5B31064eB17'; // Dirección del contrato
const account = '0x5880449cf297B96c836C1b68eCEf0b0C09741952'; // Cuenta de Ganache

// Crear instancia del contrato
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Ruta para añadir un evento de transporte
app.post('/addEvent', async (req, res) => {
    const { productId, location, status, temperature } = req.body;
    try {
        await contract.methods.addTransportEvent(productId, location, status, temperature)
            .send({ from: account, gas: 3000000 });
        res.status(200).send(`Evento de transporte añadido para el producto: ${productId}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al añadir evento de transporte.');
    }
});

// Ruta para obtener el historial de transporte
app.get('/history/:productId', async (req, res) => {
    const { productId } = req.params;
    try {
        const eventCount = await contract.methods.getProductEventCount(productId).call();
        const events = [];
        for (let i = 0; i < eventCount; i++) {
            const event = await contract.methods.getTransportEvent(productId, i).call();
            events.push({
                location: event.location,
                status: event.status,
                temperature: event.temperature,
                timestamp: new Date(Number(event.timestamp) * 1000).toLocaleString()
            });
        }
        res.status(200).json(events);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener historial de transporte.');
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
