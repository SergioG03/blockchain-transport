// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TransportTraceability {

    struct TransportEvent {
        uint256 timestamp;
        string location;
        string status;  
        string temperature;  
    }

    mapping(string => TransportEvent[]) public productHistory;  
    event NewTransportEvent(string productId, uint256 timestamp, string location, string status, string temperature);

    function addTransportEvent(
        string memory _productId,
        string memory _location,
        string memory _status,
        string memory _temperature
    ) public {
        TransportEvent memory newEvent = TransportEvent({
            timestamp: block.timestamp,
            location: _location,
            status: _status,
            temperature: _temperature
        });

        productHistory[_productId].push(newEvent);

        emit NewTransportEvent(_productId, block.timestamp, _location, _status, _temperature);
    }

    function getProductEventCount(string memory _productId) public view returns (uint256) {
        return productHistory[_productId].length;
    }

    function getTransportEvent(string memory _productId, uint256 _index) public view returns (
        uint256 timestamp, string memory location, string memory status, string memory temperature
    ) {
        TransportEvent memory transportEvent = productHistory[_productId][_index];
        return (transportEvent.timestamp, transportEvent.location, transportEvent.status, transportEvent.temperature);
    }
}
