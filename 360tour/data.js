var APP_DATA = {
  "scenes": [
    {
      "id": "0-woodshop-entrance",
      "name": "Woodshop Entrance",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.5585053606382022,
        "pitch": 0.34373962069322417,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": -2.355627993468085,
          "pitch": 0.841638826583468,
          "rotation": 0,
          "target": "18-laser-room-laser"
        },
        {
          "yaw": -0.26718815671167917,
          "pitch": 0.867528821139377,
          "rotation": 0,
          "target": "6-woodshop-tablesaw"
        },
        {
          "yaw": 1.3869615561150468,
          "pitch": 0.8971554696967452,
          "rotation": 0,
          "target": "1-woodshop-cubbies"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.882829377194847,
          "pitch": 0.42258838976512614,
          "title": "Sandblasting Cabinet",
          "text": "Used for cleaning parts or applying surface finishes."
        },
        {
          "yaw": 0.2610325633429813,
          "pitch": 0.4078038899503653,
          "title": "Table Saw",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-woodshop-cubbies",
      "name": "Woodshop Cubbies",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 2.8872606200222037,
        "pitch": 0.2756330222511494,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": -1.9950021106883113,
          "pitch": 0.7645170883013108,
          "rotation": 0,
          "target": "0-woodshop-entrance"
        },
        {
          "yaw": 1.2315713374594903,
          "pitch": 0.8987713235485906,
          "rotation": 0,
          "target": "7-woodshop-green-cabinet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-woodshop-mid-table",
      "name": "Woodshop Mid-Table",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -1.1281540115461492,
        "pitch": 0.5208763855078544,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 0.18697493557207245,
          "pitch": 0.687201246268458,
          "rotation": 0,
          "target": "7-woodshop-green-cabinet"
        },
        {
          "yaw": 0.8588597903752397,
          "pitch": 0.6758267681111256,
          "rotation": 0,
          "target": "1-woodshop-cubbies"
        },
        {
          "yaw": -2.486222027999709,
          "pitch": 0.681665127750307,
          "rotation": 0,
          "target": "3-woodshop-cnc-router"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.995626477655124,
          "pitch": 0.6022306526099559,
          "title": "Slow-speed Knife Grinder",
          "text": "Text"
        },
        {
          "yaw": -1.0973131507744096,
          "pitch": 0.29925357766002314,
          "title": "Small Wood Lathe",
          "text": "Text"
        },
        {
          "yaw": -0.5666669215047868,
          "pitch": 0.5122323254572194,
          "title": "Scroll Saw",
          "text": "Text"
        },
        {
          "yaw": -0.3526922744561283,
          "pitch": 0.18944952806797133,
          "title": "Small Bandsaw",
          "text": "Text"
        },
        {
          "yaw": -1.5556385806142181,
          "pitch": 0.09958092663049456,
          "title": "Drill Press",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-woodshop-cnc-router",
      "name": "Woodshop CNC Router",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -2.634387345671458,
        "pitch": 0.3607287424604344,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 0.5416447201019103,
          "pitch": 0.8634590302568501,
          "rotation": 0,
          "target": "2-woodshop-mid-table"
        },
        {
          "yaw": 2.2873892365899433,
          "pitch": 0.9376889867044937,
          "rotation": 0,
          "target": "4-woodshop-wood-rack"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.27962230856369,
          "pitch": 0.22468338182500602,
          "title": "CNC Router",
          "text": "Thanks to donations by Torc Robotics and Onefinity CNC, this CNC router is capable of cutting wood and aluminum into intricate shapes."
        },
        {
          "yaw": -1.3549148513477398,
          "pitch": 0.26958286541728427,
          "title": "Compound Miter Saw",
          "text": "Text"
        },
        {
          "yaw": -0.9212955682439059,
          "pitch": 0.3728450916232262,
          "title": "Belt Sander",
          "text": "Text"
        },
        {
          "yaw": -0.6403118560630006,
          "pitch": 0.27052672502458464,
          "title": "Oscillating Spindle Sander",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-woodshop-wood-rack",
      "name": "Woodshop Wood rack",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -3.0092724359259027,
        "pitch": 0.37981397153647833,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 1.2198286720163267,
          "pitch": 0.8530799899381325,
          "rotation": 0,
          "target": "3-woodshop-cnc-router"
        },
        {
          "yaw": -2.073927225271124,
          "pitch": 0.8003412333063196,
          "rotation": 0,
          "target": "5-woodshop-sink"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.770452510101469,
          "pitch": 0.38905428392071073,
          "title": "Wood Rack",
          "text": "Members may store wood on this rack on a limited basis. Communal materials are also stored here."
        },
        {
          "yaw": -0.17658859045214825,
          "pitch": 0.39671409417116266,
          "title": "Dust collector",
          "text": "Text"
        },
        {
          "yaw": -1.1418534483850582,
          "pitch": 0.415463115671038,
          "title": "Router Table",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-woodshop-sink",
      "name": "Woodshop Sink",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -1.6400899977757728,
        "pitch": 0.5647446048931002,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 0.6692932828007034,
          "pitch": 0.8467073243140053,
          "rotation": 0,
          "target": "4-woodshop-wood-rack"
        },
        {
          "yaw": 2.132929512820489,
          "pitch": 0.8047692257996921,
          "rotation": 0,
          "target": "6-woodshop-tablesaw"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.29601967450624755,
          "pitch": 0.6419040238434377,
          "title": "Jointer",
          "text": "Text"
        },
        {
          "yaw": -0.998948200707023,
          "pitch": 0.493028276923992,
          "title": "Thickness Planer",
          "text": "Text"
        },
        {
          "yaw": -1.3004401887822077,
          "pitch": 0.6965133683059079,
          "title": "Robot Vacuum",
          "text": "Text"
        },
        {
          "yaw": 2.746893614208827,
          "pitch": 0.5783866024844109,
          "title": "Thickness Planer #2",
          "text": "Text"
        },
        {
          "yaw": -3.0974264702987035,
          "pitch": 0.11946961060284167,
          "title": "<div>Metallurgy Kiln</div>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "6-woodshop-tablesaw",
      "name": "Woodshop Tablesaw",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 1.3076543780326713,
        "pitch": 0.4454030530383015,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": -0.08450557067979858,
          "pitch": 0.7445832073795096,
          "rotation": 0,
          "target": "5-woodshop-sink"
        },
        {
          "yaw": 2.7639399110600333,
          "pitch": 0.8379222216754307,
          "rotation": 0,
          "target": "0-woodshop-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3040920219757126,
          "pitch": 0.5078610420255281,
          "title": "Tablesaw",
          "text": "Text"
        },
        {
          "yaw": -1.7880656922621103,
          "pitch": 0.5243018831832913,
          "title": "Bandsaw",
          "text": "A large 14\" bandsaw suitable for resawing."
        },
        {
          "yaw": -2.7838250064963272,
          "pitch": -0.07556814130067124,
          "title": "Air Quality Monitor",
          "text": "Text"
        }
      ]
    },
    {
      "id": "7-woodshop-green-cabinet",
      "name": "Woodshop Green Cabinet",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 3.115690216436665,
        "pitch": 0.4794064266421145,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": -1.8724275422677366,
          "pitch": 0.9063906386399054,
          "rotation": 0,
          "target": "1-woodshop-cubbies"
        },
        {
          "yaw": -0.7223483389748431,
          "pitch": 0.9403468627912623,
          "rotation": 0,
          "target": "2-woodshop-mid-table"
        },
        {
          "yaw": 1.5235261179561679,
          "pitch": 0.8623623838102414,
          "rotation": 0,
          "target": "8-storage-room-woodshop-door"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.5074897757029273,
          "pitch": 0.7289228380514388,
          "title": "Fastener Collection",
          "text": "Hacksburg has a large fastener collection to supply members building mechanical projects."
        },
        {
          "yaw": -2.68843138412163,
          "pitch": 0.08532865688735924,
          "title": "Safety Gear",
          "text": "Text"
        }
      ]
    },
    {
      "id": "8-storage-room-woodshop-door",
      "name": "Storage Room Woodshop Door",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -0.7370659687268493,
        "pitch": 0.26981499903452466,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 2.802172827019982,
          "pitch": 0.7925998052205774,
          "rotation": 0,
          "target": "7-woodshop-green-cabinet"
        },
        {
          "yaw": -1.8531514807056482,
          "pitch": 0.7661487281868187,
          "rotation": 0,
          "target": "9-metalshop-entrance"
        },
        {
          "yaw": 0.4493053931583244,
          "pitch": 0.7406091922129647,
          "rotation": 0,
          "target": "12-storage-room-lockers"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0959123892338454,
          "pitch": 0.375394007211753,
          "title": "Vacuum Former",
          "text": "Text"
        },
        {
          "yaw": -1.198699471737207,
          "pitch": 0.07107157626461102,
          "title": "Silicone Moldmaking Supplies",
          "text": "Text"
        }
      ]
    },
    {
      "id": "9-metalshop-entrance",
      "name": "Metalshop Entrance",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -2.5502549658500904,
        "pitch": 0.31528892874221626,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 0.5057708945166333,
          "pitch": 0.9976277019339204,
          "rotation": 0,
          "target": "8-storage-room-woodshop-door"
        },
        {
          "yaw": -1.7574403233305436,
          "pitch": 0.95268394016664,
          "rotation": 0,
          "target": "10-metalshop-cnc-mill"
        },
        {
          "yaw": -2.842745440523915,
          "pitch": 0.857512628430019,
          "rotation": 0,
          "target": "11-metalshop-lathe"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2200725868281594,
          "pitch": 0.8065805440436158,
          "title": "Metalshop Bandsaw",
          "text": "Text"
        },
        {
          "yaw": -0.7881847560389499,
          "pitch": 0.47355567897443507,
          "title": "2'x2' Surface Plate",
          "text": "Text"
        }
      ]
    },
    {
      "id": "10-metalshop-cnc-mill",
      "name": "Metalshop CNC Mill",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -2.357573795249614,
        "pitch": 0.56866100815542,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": -0.006771693209769225,
          "pitch": 0.805752533141531,
          "rotation": 0,
          "target": "9-metalshop-entrance"
        },
        {
          "yaw": 1.291278834385908,
          "pitch": 0.775246859799493,
          "rotation": 0,
          "target": "11-metalshop-lathe"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.357573795249614,
          "pitch": 0.56866100815542,
          "title": "CNC Mill",
          "text": "A manual milling machine converted to CNC operation. Includes a rotary axis. Built around LinuxCNC."
        }
      ]
    },
    {
      "id": "11-metalshop-lathe",
      "name": "Metalshop Lathe",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 2.229362244518601,
        "pitch": 0.47647868864460996,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 0.8171899215712202,
          "pitch": 0.6734717089794877,
          "rotation": 0,
          "target": "9-metalshop-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7806683690976524,
          "pitch": 0.48941512598252856,
          "title": "Manual Lathe",
          "text": "Text"
        },
        {
          "yaw": -0.13507206859619814,
          "pitch": 0.19534133127291042,
          "title": "Shop Press",
          "text": "Our shop press leaves this space twice a year for our annual apple cider making event each Fall."
        },
        {
          "yaw": -0.8844877429398945,
          "pitch": 0.6642138028542206,
          "title": "Casting equipment",
          "text": "Casting equipment is used during casting classes to show the art of pouring metal into sand molds."
        }
      ]
    },
    {
      "id": "12-storage-room-lockers",
      "name": "Storage Room Lockers",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 1.2809412250965604,
        "pitch": 0.23049348163979033,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": -1.4954619605374635,
          "pitch": 0.6289959016796196,
          "rotation": 0,
          "target": "9-metalshop-entrance"
        },
        {
          "yaw": -2.2118936610513984,
          "pitch": 0.7104999340892384,
          "rotation": 0,
          "target": "8-storage-room-woodshop-door"
        },
        {
          "yaw": 0.5388833247255249,
          "pitch": 0.6663392647103805,
          "rotation": 0,
          "target": "13-craft-room-large-printer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.2167062163581335,
          "pitch": 0.20452826635471055,
          "title": "Lockers",
          "text": "Members may claim a locker, subject to availability, to store personal items and projects at the space."
        }
      ]
    },
    {
      "id": "13-craft-room-large-printer",
      "name": "Craft Room Large Printer",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.48474222002395173,
        "pitch": 0.5766168873031621,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 1.3498986431522262,
          "pitch": 0.8239715064493751,
          "rotation": 0,
          "target": "12-storage-room-lockers"
        },
        {
          "yaw": -0.5488592982749179,
          "pitch": 0.7472002349488633,
          "rotation": 0,
          "target": "14-craft-room-desk"
        },
        {
          "yaw": -2.281442164748288,
          "pitch": 0.7918743679773179,
          "rotation": 0,
          "target": "17-craft-room-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.48474222002395173,
          "pitch": 0.5766168873031621,
          "title": "Large 2D Printer",
          "text": "Designed for printing posters and technical drawings."
        },
        {
          "yaw": 3.106035599001058,
          "pitch": 0.577226270887568,
          "title": "Fabric Arts Supplies",
          "text": "Sewing and embroidery thread, leatherworking supplies, printmaking supplies..."
        }
      ]
    },
    {
      "id": "14-craft-room-desk",
      "name": "Craft Room Desk",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.0375917069660332,
        "pitch": 0.5119133060861429,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 2.0328175997659157,
          "pitch": 0.8253274780097755,
          "rotation": 0,
          "target": "13-craft-room-large-printer"
        },
        {
          "yaw": -1.9910823066148957,
          "pitch": 0.8531117434312865,
          "rotation": 0,
          "target": "15-craft-room-serger"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3093046454037829,
          "pitch": 0.44692961728770975,
          "title": "Knitting Machine",
          "text": "Text"
        }
      ]
    },
    {
      "id": "15-craft-room-serger",
      "name": "Craft Room Serger",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 2.9012490900463366,
        "pitch": 0.6025298212191483,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": -1.243324025612596,
          "pitch": 0.8228392732236234,
          "rotation": 0,
          "target": "14-craft-room-desk"
        },
        {
          "yaw": 1.4825628592888318,
          "pitch": 0.8102828993323392,
          "rotation": 0,
          "target": "16-craft-room-lockers"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.9012490900463366,
          "pitch": 0.6025298212191483,
          "title": "Serger",
          "text": "Text"
        }
      ]
    },
    {
      "id": "16-craft-room-lockers",
      "name": "Craft Room Lockers",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 1.5119402600258631,
        "pitch": 0.33050242804030994,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": -1.6128152874274662,
          "pitch": 0.8192784243169697,
          "rotation": 0,
          "target": "15-craft-room-serger"
        },
        {
          "yaw": 0.2658607190398179,
          "pitch": 0.6969829889462353,
          "rotation": 0,
          "target": "17-craft-room-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.4295793828503172,
          "pitch": 0.4825758619401572,
          "title": "Small 2D Printer",
          "text": "Text"
        },
        {
          "yaw": 2.816832853997907,
          "pitch": 0.3665960899197529,
          "title": "Medium 2D Printer",
          "text": "Optimized for printing photographs."
        },
        {
          "yaw": -2.5245429356716684,
          "pitch": 0.38216750313590353,
          "title": "Embroidery Machine",
          "text": "Text"
        },
        {
          "yaw": -2.782785746721027,
          "pitch": 0.2693989975708373,
          "title": "Sewing Machines",
          "text": "Text"
        }
      ]
    },
    {
      "id": "17-craft-room-entrance",
      "name": "Craft Room Entrance",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -1.9160020509926028,
        "pitch": 0.46426703596398866,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": -2.7928011321871153,
          "pitch": 0.7345682558400135,
          "rotation": 0,
          "target": "16-craft-room-lockers"
        },
        {
          "yaw": -0.956958283549401,
          "pitch": 0.7100280006448045,
          "rotation": 0,
          "target": "13-craft-room-large-printer"
        },
        {
          "yaw": 1.59976228982309,
          "pitch": 0.7670120822276143,
          "rotation": 0,
          "target": "18-laser-room-laser"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.14081109609708342,
          "pitch": 0.34792190071783047,
          "title": "Signup Forms",
          "text": "To sign up for a membership, go to https://hacksburg.org/join"
        }
      ]
    },
    {
      "id": "18-laser-room-laser",
      "name": "Laser Room Laser",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -2.740990273552482,
        "pitch": 0.2971976074767131,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 2.283750883137442,
          "pitch": 0.5681145305704494,
          "rotation": 0,
          "target": "0-woodshop-entrance"
        },
        {
          "yaw": 0.7546602039598813,
          "pitch": 0.8894633385486284,
          "rotation": 0,
          "target": "19-laser-room-resin-printer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7700499757130377,
          "pitch": 0.3918261021100946,
          "title": "Laser Cutter",
          "text": "<div>Industrial CO2 Laser Cutter</div><div>&nbsp;- Cuts wood, acrylic, fabric, and more</div><div>&nbsp;- Marks stone, glass, and metal</div>"
        },
        {
          "yaw": -1.2569837703302582,
          "pitch": 0.49846784854080894,
          "title": "Computer Workstation",
          "text": "Includes software for graphics, CAD, CAM, and more."
        }
      ]
    },
    {
      "id": "19-laser-room-resin-printer",
      "name": "Laser Room Resin Printer",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 3.1131445253236283,
        "pitch": 0.12353440420291406,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 1.327855831899944,
          "pitch": 0.8770337057473476,
          "rotation": 0,
          "target": "18-laser-room-laser"
        },
        {
          "yaw": -2.037682925659432,
          "pitch": 1.0293800256980088,
          "rotation": 0,
          "target": "20-laser-room-server-rack"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.349344950561367,
          "pitch": 0.3776605739747705,
          "title": "3D Printers",
          "text": "Two Bambu P1-series printers, and one Elegoo resin printer."
        }
      ]
    },
    {
      "id": "20-laser-room-server-rack",
      "name": "Laser Room Server Rack",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -0.4524430445554586,
        "pitch": 0.25477860348335213,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 0.8659641641167841,
          "pitch": 0.9156616241227269,
          "rotation": 0,
          "target": "19-laser-room-resin-printer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4181398929173135,
          "pitch": 0.46719463700423347,
          "title": "Server Rack",
          "text": "Manages Hacksburg web services, including remote access to some Hacksburg software. Members may request a VM for personal projects."
        },
        {
          "yaw": -0.4139042925390406,
          "pitch": 0.4967636366337551,
          "title": "Electronics Bench",
          "text": "Diagnose and repair electronics with soldering equipment, multimeters, power supplies, oscilloscopes, function generators, and more."
        }
      ]
    }
  ],
  "name": "Hacksburg June 2026",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
