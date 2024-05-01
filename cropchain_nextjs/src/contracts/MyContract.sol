// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    struct Crop {
        uint256 landArea;
        string cropName;
    }

    mapping(string => Crop) nameToCrop;
    mapping(string => uint256) cropChoices;
    string[] crops;
    uint256 total = 0;

    function registerCrop(
        string memory _name,
        uint256 _landArea,
        string memory _cropName
    ) public {
        Crop memory newCrop = Crop(_landArea, _cropName);
        nameToCrop[_name] = newCrop;
        if (cropChoices[_cropName] == 0) crops.push(_cropName);
        cropChoices[_cropName] += _landArea;
        total += _landArea;
    }

    function ModifyCrop(
        string memory _name,
        uint256 _landArea,
        string memory _cropName
    ) public {
        Crop memory existingCrop = nameToCrop[_name];
        Crop memory newCrop = Crop(_landArea, _cropName);
        nameToCrop[_name] = newCrop;
        if (cropChoices[_cropName] == 0) crops.push(_cropName);
        cropChoices[existingCrop.cropName] -= existingCrop.landArea;
        total -= existingCrop.landArea;
        cropChoices[_cropName] += _landArea;
        total += _landArea;
    }

    function recommendCrop() public view returns (string memory) {
        string memory bestChoice = crops[0];
        uint256 leastSupply = cropChoices[bestChoice];
        for (uint256 i = 1; i < crops.length; i++) {
            if (cropChoices[crops[i]] < leastSupply) {
                bestChoice = crops[i];
                leastSupply = cropChoices[bestChoice];
            }
        }
        return bestChoice;
    }
}
