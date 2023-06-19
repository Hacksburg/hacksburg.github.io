var APP_DATA = {
  "scenes": [
    {
      "id": "0-laser-room",
      "name": "Laser Room",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.1666505795262161,
        "pitch": 0.09332808768193601,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 2.3360282648076707,
          "pitch": 0.11378688496314915,
          "rotation": 0,
          "target": "1-woodshop"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.1293183947197765,
          "pitch": 0.22712926819867185,
          "title": "Laser Cutter",
          "text": "80W CO2 Laser Cutter<div>- Cuts wood, acrylic, fabric, and more</div><div>- Marks stone, glass, and metal</div>"
        },
        {
          "yaw": -2.293326681596973,
          "pitch": 0.20836572052939317,
          "title": "Computer Workstation",
          "text": "Includes software for graphics, CAD, CAM, and more."
        },
        {
          "yaw": 0.5510559844565854,
          "pitch": 0.3069801436687811,
          "title": "Electronics Bench",
          "text": "Diagnose and repair electronics with soldering equipment, multimeters, power supplies, oscilloscopes, function generators, and other tools."
        },
        {
          "yaw": -0.6169082817719094,
          "pitch": 0.18177302929938932,
          "title": "3D Printers",
          "text": "16x16x16\" FDM printer with high flow direct-drive extruder for large parts<div><br></div><div>10\" 8K resin printer for high detail parts</div>"
        },
        {
          "yaw": 0.11000785707511085,
          "pitch": -0.18170523021304774,
          "title": "Server and Printer",
          "text": "Runs several of Hacksburg's web services, including remote access to CAD/CAM softwares. Member's may request a VM for personal projects."
        }
      ]
    },
    {
      "id": "1-woodshop",
      "name": "Woodshop",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.049864609249922864,
        "pitch": 0.24230591486056952,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -3.0113631234672624,
          "pitch": 0.4793081121894627,
          "rotation": 0,
          "target": "0-laser-room"
        },
        {
          "yaw": 0.5109853076641464,
          "pitch": 0.45677613815106355,
          "rotation": 0,
          "target": "2-woodshop"
        },
        {
          "yaw": -0.9576023558340854,
          "pitch": 0.5513282587776107,
          "rotation": 0,
          "target": "5-woodshop"
        },
        {
          "yaw": 0.35049376980458824,
          "pitch": 0.1250297152712161,
          "rotation": 0,
          "target": "6-storage-and-crafts"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.08814389598995831,
          "pitch": 0.45469193870953717,
          "title": "Router Table",
          "text": "Text"
        },
        {
          "yaw": -0.5695218053018607,
          "pitch": 0.3741307644387284,
          "title": "Table Saw",
          "text": "Text"
        },
        {
          "yaw": 1.378440350081668,
          "pitch": 0.690876076079622,
          "title": "Jointer",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-woodshop",
      "name": "Woodshop",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.0676808987956079,
        "pitch": 0.3016427607488339,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 2.3058195875602845,
          "pitch": 0.7122474088742852,
          "rotation": 0,
          "target": "6-storage-and-crafts"
        },
        {
          "yaw": 0.9191992781733287,
          "pitch": 0.35599268980762844,
          "rotation": 0,
          "target": "3-woodshop"
        },
        {
          "yaw": -0.7775861824370551,
          "pitch": 0.44154020317872167,
          "rotation": 0,
          "target": "1-woodshop"
        },
        {
          "yaw": -0.7834463900888107,
          "pitch": 0.08655057596722493,
          "rotation": 0,
          "target": "0-laser-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3214471050381178,
          "pitch": 0.29742500552877615,
          "title": "Materials Storage",
          "text": "Both member owned and \"free to use\" woodshop materials"
        },
        {
          "yaw": -2.9935304834864738,
          "pitch": 0.6315551403574258,
          "title": "Hand Tools",
          "text": "Tape measures, calipers, screwdrivers, pliers, wrenches, etc. Also includes sanding supplies and a wide variety of fastners (metric and imperial)."
        },
        {
          "yaw": -2.2017332901235847,
          "pitch": 0.7683805387594909,
          "title": "Flammables Cabinet",
          "text": "Safe storage of paints, stains, and cleaning supplies"
        },
        {
          "yaw": 0.14295991912572958,
          "pitch": 0.453536196422224,
          "title": "Work Surfaces",
          "text": "11' x 6' total area"
        },
        {
          "yaw": -1.64314528719596,
          "pitch": 0.04084284628418189,
          "title": "Power Tools",
          "text": "Also storage for safety equipment; dust, hearing and eye protection."
        }
      ]
    },
    {
      "id": "3-woodshop",
      "name": "Woodshop",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.5926588901730625,
        "pitch": 0.4279148733824947,
        "fov": 1.2074393756439121
      },
      "linkHotspots": [
        {
          "yaw": -1.5598648935400838,
          "pitch": 0.49450137793227,
          "rotation": 0,
          "target": "4-woodshop"
        },
        {
          "yaw": 2.2395921607481064,
          "pitch": 0.4061284406880823,
          "rotation": 0,
          "target": "2-woodshop"
        },
        {
          "yaw": -2.9559496970114854,
          "pitch": 0.0321626850885437,
          "rotation": 0,
          "target": "0-laser-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.264392384383239,
          "pitch": 0.5878068695604668,
          "title": "Onefinity Woodworker",
          "text": "32\"x32\" CNC Gantry Mill<div><br></div><div>Equipped with 2.2kW auto-tool-change spindle</div><div><br></div><div>Can machine wood, plastics, aluminum, and light cuts on steel</div>"
        },
        {
          "yaw": -2.5046125154279792,
          "pitch": 0.48361566758584473,
          "title": "Dust Collection",
          "text": "All tools are equipped with dust collection for clean and safe operation"
        },
        {
          "yaw": -2.198793372270533,
          "pitch": 0.4419524851568326,
          "title": "12\" Thickness Planer",
          "text": "12\" wide x 6.5\" depth"
        },
        {
          "yaw": -2.105034416265786,
          "pitch": 0.24141141294466628,
          "title": "Disk/Belt Sander",
          "text": "6x48\" belt, 9\" disk"
        },
        {
          "yaw": -1.798040167818435,
          "pitch": 0.2590054366946202,
          "title": "Sliding Compound Miter Saw",
          "text": "Makita LS1013 10in Dual Sliding Compound Miter Saw"
        },
        {
          "yaw": -1.1288760043451305,
          "pitch": 0.3138309663941854,
          "title": "Sand Blasting Cabinet",
          "text": "Includes vacuum media recovery and filtering"
        }
      ]
    },
    {
      "id": "4-woodshop",
      "name": "Woodshop",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.13357144453045144,
        "pitch": 0.3510963256142592,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -0.6184976187069591,
          "pitch": 0.49349132910986704,
          "rotation": 0,
          "target": "3-woodshop"
        },
        {
          "yaw": 0.5836148920472066,
          "pitch": 0.5621516653752803,
          "rotation": 0,
          "target": "5-woodshop"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2601721475483565,
          "pitch": 0.5085661838936986,
          "title": "Wood Lathe",
          "text": "10\"x18\", 1/2 HP"
        },
        {
          "yaw": 0.21087858595709363,
          "pitch": 0.4264066209116848,
          "title": "Oscillating Drum Sander",
          "text": ""
        },
        {
          "yaw": 0.3676633340294977,
          "pitch": 0.30769019213401094,
          "title": "Band Saw",
          "text": "9\" throat x 3.5\" height"
        },
        {
          "yaw": 1.65056250956356,
          "pitch": 0.4958304324742997,
          "title": "Ultrasonic Cleaner",
          "text": ""
        },
        {
          "yaw": -1.5699036537847544,
          "pitch": 0.9358482532909473,
          "title": "TIG/Stick Welder",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-woodshop",
      "name": "Woodshop",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.0017809482163215762,
        "pitch": 0.23736089618992295,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -1.0084217256014796,
          "pitch": 0.5612910523123809,
          "rotation": 0,
          "target": "4-woodshop"
        },
        {
          "yaw": 1.861037294151318,
          "pitch": 0.566348214825874,
          "rotation": 0,
          "target": "1-woodshop"
        },
        {
          "yaw": 2.469562149905216,
          "pitch": 0.09848274078002639,
          "rotation": 6.283185307179586,
          "target": "0-laser-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.37045404318588027,
          "pitch": 0.40020757107412663,
          "title": "Scroll Saw",
          "text": "Central Machinery 16\" Variable Speed Scroll Saw"
        },
        {
          "yaw": 0.1597794837611204,
          "pitch": 0.41867123883574386,
          "title": "Drill Press",
          "text": "Sears 15\" Variable Speed Drill Press"
        },
        {
          "yaw": 0.9135537147727693,
          "pitch": 0.6030294155354845,
          "title": "Table Saw",
          "text": "Text"
        },
        {
          "yaw": 2.44205173265407,
          "pitch": 0.7130842745525481,
          "title": "Additional work surface",
          "text": "3' x 7' work area"
        }
      ]
    },
    {
      "id": "6-storage-and-crafts",
      "name": "Storage and Crafts",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.636112011821135,
        "pitch": 0.4204540596482076,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 1.430211877492778,
          "pitch": 0.6551589842130916,
          "rotation": 0,
          "target": "2-woodshop"
        },
        {
          "yaw": 2.5747663566268457,
          "pitch": 0.6555270436318601,
          "rotation": 0.7853981633974483,
          "target": "7-metal-shop"
        },
        {
          "yaw": 1.395328096269182,
          "pitch": 0.04911127892285805,
          "rotation": 0,
          "target": "0-laser-room"
        },
        {
          "yaw": 1.3553526684046382,
          "pitch": 0.2671210581532417,
          "rotation": 0,
          "target": "1-woodshop"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.11217706555015106,
          "pitch": 0.539844114921582,
          "title": "Industrial Sewing Machine",
          "text": "Plus storage for sewing and craft supplies"
        },
        {
          "yaw": -1.3368235027692563,
          "pitch": 0.21383414781032783,
          "title": "Lockers",
          "text": "Members can request a locker for storage of personal projects and materials&nbsp;"
        },
        {
          "yaw": -2.142505245522564,
          "pitch": 0.21137422001744,
          "title": "Project Supplies",
          "text": "\"Free to use\" project supplies including motors, power supplies, and more"
        },
        {
          "yaw": -3.0474502585673804,
          "pitch": 0.22891046285181105,
          "title": "Class Storage",
          "text": "Storage of supplies and materials for Hacksburg classes"
        },
        {
          "yaw": -1.4878234326204485,
          "pitch": 1.1390674769893785,
          "title": "Work table",
          "text": "For crafting or fabric arts. Includes cutting mat"
        },
        {
          "yaw": 0.4540566850154004,
          "pitch": 0.527699242407266,
          "title": "Air Compressor",
          "text": "Supplies compressed air to wood and metal shop"
        },
        {
          "yaw": -1.6474657318391692,
          "pitch": 0.7979358066833679,
          "title": "Sewing Machine",
          "text": "Multiple sewing machines availible for use"
        }
      ]
    },
    {
      "id": "7-metal-shop",
      "name": "Metal Shop",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.689562205526169,
        "pitch": 0.4217240667052451,
        "fov": 1.2074584246565028
      },
      "linkHotspots": [
        {
          "yaw": -2.940977023581379,
          "pitch": 0.7071599316746227,
          "rotation": 0,
          "target": "6-storage-and-crafts"
        },
        {
          "yaw": 0.8433518165522447,
          "pitch": 0.33636641765289,
          "rotation": 5.497787143782138,
          "target": "8-metal-shop"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3774140795632626,
          "pitch": 0.42004570972499167,
          "title": "CNC Mill",
          "text": "Controlled via LinuxCNC<div>4th axis availible</div>"
        },
        {
          "yaw": 2.262382230615014,
          "pitch": 0.4573363266813928,
          "title": "24\"x24\" Surface Plate",
          "text": "For measuring machined parts accurately"
        },
        {
          "yaw": -0.6829637238074824,
          "pitch": 0.48657599481790115,
          "title": "Metal Lathe",
          "text": "10\"x30\" 1HP Southbend Lathe&nbsp;<div>VFD controlled</div>"
        },
        {
          "yaw": 0.3989045115579515,
          "pitch": 0.09374406026521065,
          "title": "Hydraulic Press",
          "text": "20 ton with pressure gauge"
        },
        {
          "yaw": 2.1129383320493806,
          "pitch": 0.7363715652604075,
          "title": "Metal Cutting Bandsaw",
          "text": "For cutting metal stock up to 4\"x6\""
        },
        {
          "yaw": -1.4910008567265507,
          "pitch": 0.7416009537319095,
          "title": "Lathe Tools",
          "text": "Including collets, tool holders, and indexable tooling"
        },
        {
          "yaw": 0.3353062706173944,
          "pitch": 0.7770067844982158,
          "title": "Mill Tools",
          "text": "Collets, tooling, and fixturing"
        }
      ]
    },
    {
      "id": "8-metal-shop",
      "name": "Metal Shop",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.35513295224532904,
        "pitch": 0.2086956737027741,
        "fov": 1.0669590349709652
      },
      "linkHotspots": [
        {
          "yaw": -2.2342912205288226,
          "pitch": 0.5880332640752641,
          "rotation": 0,
          "target": "7-metal-shop"
        },
        {
          "yaw": -2.4364415057456448,
          "pitch": 0.16437726810904607,
          "rotation": 5.497787143782138,
          "target": "6-storage-and-crafts"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.18400272691443753,
          "pitch": 0.3958330917132944,
          "title": "Mini CNC Mill",
          "text": "Sherline&nbsp;12″ Deluxe Tabletop Mill"
        },
        {
          "yaw": 0.6794862868174061,
          "pitch": 0.2934129668991101,
          "title": "Mini CNC Lathe",
          "text": "Sherline 8\" CNC Lathe"
        },
        {
          "yaw": 0.29175845418128077,
          "pitch": 0.3872776740683932,
          "title": "Mini Manual Lathe",
          "text": "Sherline 8\" Tabletop Lathe (17\" also availible)"
        },
        {
          "yaw": 0.6354458467167312,
          "pitch": 0.7465776563641953,
          "title": "Metal Casting Supplies",
          "text": "Text"
        },
        {
          "yaw": 0.6593076839789536,
          "pitch": 0.5041829586285456,
          "title": "Scrap Metal",
          "text": "For welding or machining practice"
        },
        {
          "yaw": -0.5225187294623996,
          "pitch": 0.21640491477496404,
          "title": "Hacksleg",
          "text": "Kinect motion controlled robotic leg"
        }
      ]
    }
  ],
  "name": "Hacksburg Workshop",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
