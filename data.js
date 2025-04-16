var APP_DATA = {
  "scenes": [
    {
      "id": "0-room",
      "name": "room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.16922189264656495,
          "pitch": 0.7235362837713932,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": 1.8640552216989628,
          "pitch": 0.20438408946615105,
          "rotation": 0,
          "target": "2-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.067331586064215,
          "pitch": 0.5766905651261105,
          "rotation": 0,
          "target": "0-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-corridor",
      "name": "corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9393070672942603,
          "pitch": 0.5823057520261781,
          "rotation": 0,
          "target": "0-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
