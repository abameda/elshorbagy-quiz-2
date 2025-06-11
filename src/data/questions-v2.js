const quizData = {
'Chapter 1: Introduction': [
    {
      question: "What is the main distinction between computer architecture and computer organization?",
      options: [
        "Architecture deals with hardware, organization deals with software",
        "Architecture refers to attributes visible to programmer, organization refers to how features are implemented",
        "Architecture is about performance, organization is about cost",
        "There is no distinction between them"
      ],
      correct: 1,
      explanation: "Architecture includes instruction set, data representation, I/O mechanisms - what's visible to programmers. Organization covers control signals, interfaces, memory technology - the implementation details."
    },
    {
      question: "Which of the following is NOT one of the four basic computer functions?",
      options: [
        "Data processing",
        "Data storage", 
        "Data compilation",
        "Data movement"
      ],
      correct: 2,
      explanation: "The four basic functions are: data processing, data storage, data movement, and control. Data compilation is a software process, not a basic computer function."
    },
    {
      question: "What does the Program Counter (PC) register contain?",
      options: [
        "The current instruction being executed",
        "The address of the next instruction pair to be fetched",
        "The result of the last arithmetic operation",
        "The memory address being accessed"
      ],
      correct: 1,
      explanation: "The Program Counter (PC) contains the address of the next instruction pair to be fetched from memory."
    },
    {
      question: "In a multicore system, what is a 'core'?",
      options: [
        "The entire CPU chip",
        "An individual processing unit on a processor chip",
        "The system bus connecting components",
        "The cache memory hierarchy"
      ],
      correct: 1,
      explanation: "A core is an individual processing unit on a processor chip, which may be equivalent in functionality to a CPU on a single-CPU system."
    },
    {
      question: "What is the relationship between clock frequency and clock cycle time?",
      options: [
        "They are the same thing",
        "Clock cycle time = clock frequency × 2",
        "Clock cycle time = 1 / clock frequency",
        "There is no mathematical relationship"
      ],
      correct: 2,
      explanation: "Clock cycle time is the reciprocal of clock frequency. For example, an 800 MHz clock has a cycle time of 1.25 ns."
    },
    {
      question: "Which component manages the computer's resources and orchestrates performance?",
      options: [
        "ALU (Arithmetic Logic Unit)",
        "Memory",
        "Control Unit",
        "Registers"
      ],
      correct: 2,
      explanation: "The control unit manages the computer's resources and orchestrates the performance of its functional parts in response to instructions."
    },
    {
      question: "What is the primary purpose of cache memory?",
      options: [
        "To store the operating system",
        "To backup main memory",
        "To speed up memory access by storing likely-to-be-used data",
        "To control input/output operations"
      ],
      correct: 2,
      explanation: "Cache memory is smaller and faster than main memory, used to speed up memory access by placing data from main memory that is likely to be used in the near future."
    },
    {
      question: "Which register contains the 8-bit opcode instruction being executed?",
      options: [
        "Program Counter (PC)",
        "Instruction Register (IR)",
        "Memory Address Register (MAR)",
        "Accumulator (AC)"
      ],
      correct: 1,
      explanation: "The Instruction Register (IR) contains the 8-bit opcode instruction being executed."
    },
    {
      question: "What is the function of the Memory Address Register (MAR)?",
      options: [
        "Contains the instruction being executed",
        "Stores temporary data for ALU operations",
        "Specifies the address in memory of the word to be written or read",
        "Controls the sequence of operations"
      ],
      correct: 2,
      explanation: "The Memory Address Register (MAR) specifies the address in memory of the word to be written from or read into the MBR."
    },
    {
      question: "In embedded systems, what characterizes 'deeply embedded systems'?",
      options: [
        "They run complex operating systems",
        "They are programmable after deployment",
        "They are dedicated to specific tasks with extreme resource constraints",
        "They always have user interfaces"
      ],
      correct: 2,
      explanation: "Deeply embedded systems are dedicated, single-purpose devices with extreme resource constraints in terms of memory, processor size, time, and power consumption."
    },
    {
      question: "What are the four main structural components of a computer?",
      options: [
        "CPU, RAM, ROM, Hard Drive",
        "CPU, Main Memory, I/O, System Interconnection",
        "Control Unit, ALU, Registers, Cache",
        "Processor, Memory, Storage, Network"
      ],
      correct: 1,
      explanation: "The four main structural components are: CPU (controls operation and data processing), Main Memory (stores data), I/O (moves data with external environment), and System Interconnection (communication mechanism)."
    },
    {
      question: "What is the difference between response time and throughput?",
      options: [
        "They are the same metric",
        "Response time is speed, throughput is accuracy",
        "Response time is time for one task, throughput is tasks per unit time",
        "Response time is for CPU, throughput is for memory"
      ],
      correct: 2,
      explanation: "Response time is the time between start and completion of a task, while throughput is the total amount of tasks done in a given time period. There is generally no relationship between these metrics."
    },
    {
      question: "What does the Memory Buffer Register (MBR) contain?",
      options: [
        "The address of the next instruction",
        "A word to be stored in memory or received from memory/I/O",
        "The current instruction being decoded",
        "Control signals for the ALU"
      ],
      correct: 1,
      explanation: "The Memory Buffer Register (MBR) contains a word to be stored in memory or sent to the I/O unit, or is used to receive a word from memory or from the I/O unit."
    },
    {
      question: "Which generation of IoT deployment is characterized by billions of embedded devices?",
      options: [
        "Information Technology (IT)",
        "Operational Technology (OT)",
        "Personal Technology",
        "Sensor/Actuator Technology"
      ],
      correct: 3,
      explanation: "The fourth generation, Sensor/Actuator Technology, is usually thought of as the IoT and is marked by the use of billions of embedded devices using wireless connectivity."
    },
    {
      question: "What is the primary function of the Instruction Buffer Register (IBR)?",
      options: [
        "To store the program counter value",
        "To temporarily hold the right-hand instruction from memory",
        "To contain the address of data in memory",
        "To store the result of arithmetic operations"
      ],
      correct: 1,
      explanation: "The Instruction Buffer Register (IBR) is employed to temporarily hold the right-hand instruction from a word in memory."
    },
    {
      question: "In the context of data movement, what distinguishes I/O from data communications?",
      options: [
        "Speed of data transfer",
        "Type of data being moved",
        "Distance - I/O is direct connection, data communications is over longer distances",
        "Security requirements"
      ],
      correct: 2,
      explanation: "I/O occurs when data are received from or delivered to a device directly connected to the computer, while data communications involves moving data over longer distances to or from remote devices."
    },
    {
      question: "What is the key difference between application processors and dedicated processors in embedded systems?",
      options: [
        "Power consumption levels",
        "Manufacturing cost",
        "Application processors execute complex OS, dedicated processors serve specific tasks",
        "Physical size differences"
      ],
      correct: 2,
      explanation: "Application processors are defined by their ability to execute complex operating systems and are general-purpose, while dedicated processors are dedicated to one or a small number of specific tasks."
    },
    {
      question: "Which components provide the four basic functions of integrated circuits?",
      options: [
        "Transistors, resistors, capacitors, inductors",
        "Gates (processing), memory cells (storage), paths (movement), control signals (control)",
        "CPU, memory, I/O, interconnection",
        "Hardware, software, firmware, middleware"
      ],
      correct: 1,
      explanation: "In integrated circuits: gates provide data processing, memory cells provide data storage, paths provide data movement, and control signals provide control functions."
    },
    {
      question: "What advantage do Intel x86 and IBM System/370 families demonstrate?",
      options: [
        "Higher performance than competitors",
        "Lower manufacturing costs",
        "Code compatibility through shared basic architecture",
        "Better power efficiency"
      ],
      correct: 2,
      explanation: "All Intel x86 family and IBM System/370 family share the same basic architecture, which gives code compatibility (at least backwards), even though organization differs between versions."
    },
    {
      question: "In deeply embedded systems, what type of processor is typically used?",
      options: [
        "Microprocessor",
        "Microcontroller",
        "Graphics processor",
        "Digital signal processor"
      ],
      correct: 1,
      explanation: "Deeply embedded systems use a microcontroller rather than a microprocessor, are not programmable once the program logic has been burned into ROM, and have no interaction with a user."
    },
    {
      question: "What are the major structural components of a CPU?",
      options: [
        "Cache, registers, bus, clock",
        "Control Unit, ALU, Registers, CPU Interconnection",
        "Fetch unit, decode unit, execute unit, write-back unit",
        "L1 cache, L2 cache, L3 cache, main memory interface"
      ],
      correct: 1,
      explanation: "The CPU's major structural components are: Control Unit (controls CPU operation), ALU (performs data processing), Registers (provide internal storage), and CPU Interconnection (provides communication among components)."
    },
    {
      question: "What characterizes embedded systems' interaction with their environment?",
      options: [
        "They operate independently of external factors",
        "They are tightly coupled with real-time constraints",
        "They only process stored data",
        "They communicate only through network interfaces"
      ],
      correct: 1,
      explanation: "Embedded systems are often tightly coupled to their environment, giving rise to real-time constraints imposed by the need to interact with the environment, such as required speeds, precision, and timing."
    }
  ],
  'Chapter 2: Storage Environment and RAID': [
  {
    question: "What is the main difference between memory modules and storage devices?",
    options: [
      "Memory modules are cheaper than storage devices",
      "Memory modules use semiconductor chips while storage devices use magnetic or optical media",
      "Storage devices are faster than memory modules",
      "Memory modules are non-volatile while storage devices are volatile"
    ],
    correct: 1,
    explanation: "Memory modules are implemented using semiconductor chips, whereas storage devices use either magnetic or optical media. Memory modules also enable data access at higher speed than storage media."
  },
  {
    question: "Which type of memory is volatile and requires constant power supply?",
    options: [
      "ROM (Read-Only Memory)",
      "RAM (Random Access Memory)", 
      "Hard disk storage",
      "CD-ROM storage"
    ],
    correct: 1,
    explanation: "RAM is volatile and requires a constant supply of power to maintain memory cell content. Data is erased when the system's power is turned off or interrupted."
  },
  {
    question: "What does DAS stand for and how does it connect to servers?",
    options: [
      "Direct Access Storage - connects via network protocols",
      "Distributed Array Storage - connects via fiber optic cables",
      "Direct Attached Storage - connects directly through Host Bus Adapter (HBA)",
      "Dynamic Allocation Storage - connects via USB only"
    ],
    correct: 2,
    explanation: "DAS stands for Direct Attached Storage. It connects directly to a server through Host Bus Adapter (HBA), with no network between storage and host servers."
  },
  {
    question: "What is the main advantage of DAS over other storage environments?",
    options: [
      "Accessibility from multiple devices",
      "Fast performance and simple setup",
      "Network sharing capabilities",
      "Lowest cost among all options"
    ],
    correct: 1,
    explanation: "DAS offers fast performance, high capacity options, and simple setup as its main advantages."
  },
  {
    question: "What is the primary disadvantage of DAS?",
    options: [
      "Slow performance",
      "High cost",
      "Not accessible from other devices and prone to data loss if connected computer fails",
      "Complex setup requirements"
    ],
    correct: 2,
    explanation: "DAS is not accessible from other devices and is prone to data loss if the connected computer fails."
  },
  {
    question: "What does SAN stand for and what is its primary characteristic?",
    options: [
      "Storage Access Network - a wireless storage solution",
      "System Area Network - connects only servers",
      "Storage Area Networks - a dedicated data storage network accessible by multiple servers",
      "Secure Access Network - provides encrypted storage"
    ],
    correct: 2,
    explanation: "SAN stands for Storage Area Networks. It is a dedicated data storage network which can be accessed by multiple servers."
  },
  {
    question: "Which storage environment offers the fastest performance?",
    options: [
      "DAS",
      "SAN",
      "NAS",
      "RAID"
    ],
    correct: 1,
    explanation: "SAN offers the fastest performance among the options due to its dedicated network specifically designed for high-performance connections."
  },
  {
    question: "What are the main protocols used in SAN?",
    options: [
      "TCP/IP and HTTP",
      "SCSI and SATA",
      "Fibre Channel and iSCSI",
      "Ethernet and WiFi"
    ],
    correct: 1,
    explanation: "The protocols that are used in SAN are SCSI and SATA."
  },
  {
    question: "What is the main weakness of SAN mentioned in the document?",
    options: [
      "Speed and Latency",
      "Security",
      "Cost",
      "Complexity"
    ],
    correct: 1,
    explanation: "According to the document, the weakness of SAN is Security, while Speed and Latency are listed as disadvantages."
  },
  {
    question: "What does NAS stand for and at what level does it operate?",
    options: [
      "Network Access Storage - operates at block level",
      "Network Attached Storage - operates at file level",
      "Network Array Storage - operates at bit level",
      "Network Administration Storage - operates at system level"
    ],
    correct: 1,
    explanation: "NAS stands for Network Attached Storage. It is a file level computer data storage that connects to other devices on TCP/IP network."
  },
  {
    question: "Which component is NOT part of NAS architecture?",
    options: [
      "Head unit (CPU, Memory)",
      "Network Interface Card (NIC)",
      "Host Bus Adapter (HBA)",
      "Optimized operating system"
    ],
    correct: 2,
    explanation: "Host Bus Adapter (HBA) is a component of DAS, not NAS. NAS components include Head unit, NIC, optimized OS, protocols, and storage protocols."
  },
  {
    question: "What does RAID stand for?",
    options: [
      "Random Array of Independent Disks",
      "Redundant Array of Independent Disks",
      "Reliable Array of Integrated Disks",
      "Rapid Access of Internal Disks"
    ],
    correct: 1,
    explanation: "RAID stands for Redundant Array of Independent Disks."
  },
  {
    question: "Which RAID function writes consecutive logical blocks on consecutive physical disks?",
    options: [
      "Mirroring",
      "Striping",
      "Parity Calculation",
      "Synchronization"
    ],
    correct: 1,
    explanation: "Striping writes consecutive logical byte/blocks on consecutive physical disks."
  },
  {
    question: "Which RAID level provides striping with no parity or redundancy?",
    options: [
      "RAID 1",
      "RAID 0",
      "RAID 5",
      "RAID 10"
    ],
    correct: 1,
    explanation: "RAID 0 provides stripe with no parity, offering excellent performance but no redundancy."
  },
  {
    question: "What is the minimum number of disks required for RAID 1?",
    options: [
      "1 disk",
      "2 disks",
      "3 disks",
      "4 disks"
    ],
    correct: 1,
    explanation: "RAID 1 requires a minimum of 2 disks and provides excellent redundancy as blocks are mirrored."
  },
  {
    question: "Which RAID level is described as 'stripe of mirrors'?",
    options: [
      "RAID 0+1",
      "RAID 5",
      "RAID 10",
      "RAID 6"
    ],
    correct: 2,
    explanation: "RAID 10 is also called 'stripe of mirrors' and requires a minimum of 4 disks."
  },
  {
    question: "What is the minimum number of disks required for RAID 5?",
    options: [
      "2 disks",
      "3 disks",
      "4 disks",
      "5 disks"
    ],
    correct: 1,
    explanation: "RAID 5 requires a minimum of 3 disks and provides good performance with distributed parity."
  },
  {
    question: "Which RAID level uses byte-level striping?",
    options: [
      "RAID 3",
      "RAID 4",
      "RAID 5",
      "RAID 6"
    ],
    correct: 0,
    explanation: "RAID 3 uses byte level striping, while RAID 4 uses block level striping."
  },
  {
    question: "What makes RAID 6 different from RAID 5?",
    options: [
      "It uses striping instead of mirroring",
      "It has double parity blocks and requires 6 disks",
      "It provides better performance",
      "It uses fewer disks"
    ],
    correct: 1,
    explanation: "RAID 6 is similar to RAID 5 except it has double parity blocks and requires 6 disks."
  },
  {
    question: "Which RAID level is recommended for heavily read-oriented databases?",
    options: [
      "RAID 0",
      "RAID 1",
      "RAID 5",
      "RAID 10"
    ],
    correct: 2,
    explanation: "RAID 5 is the best cost effective option providing both performance and redundancy, recommended for databases that are heavily read oriented, though write operations will be slow."
  },
  {
    question: "Which RAID level is considered the BEST option for mission critical applications?",
    options: [
      "RAID 0",
      "RAID 5",
      "RAID 6",
      "RAID 10"
    ],
    correct: 3,
    explanation: "RAID 10 provides excellent redundancy and excellent performance. If you can afford it, this is the BEST option for any mission critical applications, especially databases."
  },
  {
    question: "Which storage environment would be best for a single user storing personal files?",
    options: [
      "DAS",
      "SAN",
      "NAS",
      "RAID"
    ],
    correct: 0,
    explanation: "DAS is best for individual workstations and storing personal data due to its fast performance and simple setup."
  },
  {
    question: "Which storage environment is most suitable for small businesses with multiple employees sharing files?",
    options: [
      "DAS",
      "SAN", 
      "NAS",
      "RAID"
    ],
    correct: 2,
    explanation: "NAS is best for small businesses and workgroups as it provides shared storage accessible from multiple devices on the network."
  },
  {
    question: "Which storage environment requires the most technical expertise to manage?",
    options: [
      "DAS",
      "SAN",
      "NAS", 
      "RAID"
    ],
    correct: 1,
    explanation: "SAN requires significant technical expertise to manage due to its specialized hardware and complex configuration."
  },
  {
    question: "In terms of cost ranking from lowest to highest, what is the correct order?",
    options: [
      "SAN, NAS, DAS",
      "DAS, NAS, SAN",
      "NAS, DAS, SAN",
      "DAS, SAN, NAS"
    ],
    correct: 1,
    explanation: "DAS is generally the cheapest, followed by NAS, then SAN is the most expensive due to specialized hardware and configuration."
  },
  {
    question: "Which statement about RAID is TRUE?",
    options: [
      "RAID guarantees complete data protection against any failure",
      "All RAID levels offer the same level of performance and redundancy",
      "RAID can be implemented on both DAS and NAS systems",
      "Using RAID eliminates the need for backups"
    ],
    correct: 2,
    explanation: "RAID can be implemented on both DAS and NAS systems for added benefits. RAID does not guarantee complete protection, levels differ in performance/redundancy, and backups are still needed."
  },
  {
    question: "What type of data access does SAN provide?",
    options: [
      "File level data access",
      "Block level data storage",
      "Byte level data access",
      "Application level data access"
    ],
    correct: 1,
    explanation: "SAN provides block level data storage, allowing multiple clients to access files at the same time with very high performance."
  },
  {
    question: "Which benefit is NOT associated with NAS?",
    options: [
      "Relatively inexpensive",
      "24/7 and remote data availability",
      "Fastest performance among storage options",
      "Automatic backups to other devices and cloud"
    ],
    correct: 2,
    explanation: "NAS has slower performance compared to DAS due to network overhead. The fastest performance is provided by SAN."
  },
  {
    question: "What happens to RAM data when power is interrupted?",
    options: [
      "Data is automatically backed up",
      "Data remains intact",
      "Data is erased",
      "Data is transferred to ROM"
    ],
    correct: 2,
    explanation: "RAM is volatile and requires constant power supply. Data is erased when the system's power is turned off or interrupted."
  },
  {
    question: "Which RAID level should NOT be used for critical systems?",
    options: [
      "RAID 0",
      "RAID 1", 
      "RAID 5",
      "RAID 10"
    ],
    correct: 0,
    explanation: "RAID 0 has no redundancy (no mirror, no parity), so it should not be used for any critical system despite its excellent performance."
  }
],
'Chapter 3: Computer Architecture Introduction and Basics': [
  {
    question: "What is the main purpose of computing according to Richard Hamming?",
    options: [
      "To generate numbers and data",
      "To provide insight, not just numbers",
      "To execute instructions efficiently",
      "To solve mathematical equations"
    ],
    correct: 1,
    explanation: "According to Richard Hamming, 'The purpose of computing is insight, not numbers.' The true value of computing lies in using data to gain understanding and knowledge (insight)."
  },
  {
    question: "Which transformation level is directly above Logic in the hierarchy?",
    options: [
      "Circuits",
      "Microarchitecture", 
      "ISA (Architecture)",
      "Runtime System"
    ],
    correct: 1,
    explanation: "In the levels of transformation hierarchy, Microarchitecture is directly above Logic, which is above Circuits."
  },
  {
    question: "What is abstraction in the context of computer systems?",
    options: [
      "A method to hide implementation details from users",
      "A higher level only needs to know the interface to the lower level, not how it's implemented",
      "A way to make programs run faster",
      "A technique for optimizing hardware design"
    ],
    correct: 1,
    explanation: "Abstraction means a higher level only needs to know about the interface to the lower level, not how the lower level is implemented."
  },
  {
    question: "Why might you need to understand what happens in underlying abstraction levels?",
    options: [
      "Only for academic purposes",
      "When programs run slow, consume too much energy, or don't run correctly",
      "To impress colleagues with technical knowledge",
      "It's never necessary in modern computing"
    ],
    correct: 1,
    explanation: "You need to understand underlying levels when programs run slow, consume too much energy, don't run correctly, or when designing more efficient systems."
  },
  {
    question: "What are the two key goals of the computer architecture course mentioned?",
    options: [
      "Learn programming and hardware design",
      "Understand processor internals and make cross-layer optimization decisions",
      "Master assembly language and digital logic",
      "Study algorithms and data structures"
    ],
    correct: 1,
    explanation: "The two key goals are: understand how a processor works underneath the software layer and how hardware decisions affect software/programmers, and enable making design decisions that cross boundaries of different layers."
  },
  {
    question: "In the multi-core system slowdown example, what causes the disparity in performance between applications?",
    options: [
      "CPU scheduling policies",
      "Cache miss rates",
      "DRAM controller scheduling unfairness",
      "Network latency"
    ],
    correct: 2,
    explanation: "The disparity is caused by DRAM controller scheduling policies that are unfair to some applications, particularly the row-hit first and oldest-first policies."
  },
  {
    question: "What does a row-conflict memory access result in compared to a row-hit access?",
    options: [
      "Faster access time",
      "Same access time",
      "Significantly longer access time",
      "Slightly longer access time"
    ],
    correct: 2,
    explanation: "A row-conflict memory access takes significantly longer than a row-hit access."
  },
  {
    question: "What does FR-FCFS stand for in DRAM controller scheduling?",
    options: [
      "Fast-Ready, First-Come-First-Service",
      "First-Ready, First-Come-First-Service", 
      "First-Row, First-Column-First-Service",
      "Fast-Row, First-Cache-First-Service"
    ],
    correct: 1,
    explanation: "FR-FCFS stands for First-Ready, First-Come-First-Service, which prioritizes row-hit accesses first, then older accesses first."
  },
  {
    question: "Which application type does the row-hit first policy unfairly prioritize?",
    options: [
      "CPU-intensive applications",
      "Applications with high row buffer locality",
      "Applications with random memory access",
      "Applications with low memory usage"
    ],
    correct: 1,
    explanation: "Row-hit first policy unfairly prioritizes applications with high row buffer locality - threads that keep accessing the same row."
  },
  {
    question: "What is the difference between STREAM and RANDOM memory access patterns?",
    options: [
      "STREAM is faster, RANDOM is slower",
      "STREAM has sequential access with high row buffer locality, RANDOM has random access with low row buffer locality",
      "STREAM uses more memory, RANDOM uses less",
      "STREAM is for reading, RANDOM is for writing"
    ],
    correct: 1,
    explanation: "STREAM has sequential memory access with very high row buffer locality (96% hit rate), while RANDOM has random memory access with very low row buffer locality (3% hit rate)."
  },
  {
    question: "What does a DRAM cell consist of?",
    options: [
      "Two transistors and a resistor",
      "A capacitor and an access transistor",
      "A flip-flop circuit",
      "Multiple logic gates"
    ],
    correct: 1,
    explanation: "A DRAM cell consists of a capacitor and an access transistor. It stores data in terms of charge in the capacitor."
  },
  {
    question: "Why does DRAM need to be refreshed periodically?",
    options: [
      "To prevent data corruption from electromagnetic interference",
      "Because the capacitor charge leaks over time",
      "To maintain synchronization with the CPU clock",
      "To update the stored data"
    ],
    correct: 1,
    explanation: "DRAM capacitor charge leaks over time, so the memory controller needs to refresh each row periodically to restore charge."
  },
  {
    question: "What is the typical refresh period for DRAM?",
    options: [
      "64 microseconds",
      "64 milliseconds",
      "64 seconds", 
      "64 nanoseconds"
    ],
    correct: 1,
    explanation: "The typical refresh period is 64 ms - each row needs to be activated every 64 milliseconds."
  },
  {
    question: "What are the downsides of DRAM refresh mentioned in the document?",
    options: [
      "Only energy consumption",
      "Energy consumption, performance degradation, QoS impact, and capacity scaling limits",
      "Only performance degradation",
      "Only capacity limitations"
    ],
    correct: 1,
    explanation: "DRAM refresh downsides include: energy consumption, performance degradation (DRAM unavailable during refresh), QoS/predictability impact (pause times), and refresh rate limits DRAM capacity scaling."
  },
  {
    question: "According to the RAIDR research, what percentage of refresh reduction was achieved?",
    options: [
      "46.8%",
      "74.6%",
      "15.2%",
      "84.3%"
    ],
    correct: 1,
    explanation: "RAIDR achieved 74.6% refresh reduction with only 1.25KB storage overhead for 32GB memory."
  },
  {
    question: "What is the key observation behind the RAIDR approach?",
    options: [
      "All DRAM rows need frequent refresh",
      "Most DRAM rows can be refreshed much less often without losing data",
      "DRAM refresh is unnecessary",
      "Refresh frequency should be increased"
    ],
    correct: 1,
    explanation: "RAIDR's key observation is that most DRAM rows can be refreshed much less often without losing data, allowing for different refresh rates for different rows."
  },
  {
    question: "What are the three main steps in the RAIDR approach?",
    options: [
      "Reading, Writing, Refreshing",
      "Profiling, Binning, Refreshing",
      "Measuring, Sorting, Optimizing",
      "Testing, Grouping, Scheduling"
    ],
    correct: 1,
    explanation: "RAIDR uses three steps: 1) Profiling retention time of all rows, 2) Binning rows by retention time using Bloom Filters, 3) Refreshing rows in different bins at different rates."
  },
  {
    question: "How much storage overhead does RAIDR require for 32GB memory?",
    options: [
      "1.25MB",
      "1.25KB",
      "12.5KB",
      "125KB"
    ],
    correct: 1,
    explanation: "RAIDR requires only 1.25KB storage for 32GB memory using efficient storage with Bloom Filters."
  },
  {
    question: "What performance improvement did RAIDR achieve?",
    options: [
      "~5%",
      "~9%",
      "~16%",
      "~20%"
    ],
    correct: 1,
    explanation: "RAIDR achieved approximately 9% performance improvement along with 16%/20% DRAM dynamic/idle power reduction."
  },
  {
    question: "In the memory hog example, what happens when T0 (STREAM) and T1 (RANDOM) compete for memory access?",
    options: [
      "They get equal access",
      "T1 gets prioritized due to oldest-first policy",
      "128 requests of T0 are serviced before T1 due to row buffer locality",
      "Random scheduling occurs"
    ],
    correct: 2,
    explanation: "Due to row buffer locality, 128 requests of T0 (STREAM) are serviced before T1 (RANDOM) gets access, since T0 keeps hitting the same row while T1 causes row conflicts."
  },
  {
    question: "What is the main takeaway about abstraction layers from this chapter?",
    options: [
      "Abstraction layers should never be broken",
      "Breaking abstraction layers and knowing what's underneath enables problem solving and better system design",
      "Only hardware designers need to understand multiple layers",
      "Abstraction layers are only important for software development"
    ],
    correct: 1,
    explanation: "The main takeaway is that breaking abstraction layers and knowing what happens underneath enables you to solve problems and design better future systems."
  },
  {
    question: "Which component in a multi-core system is shared among all cores?",
    options: [
      "L2 Cache",
      "L3 Cache and DRAM Memory Controller",
      "CPU registers",
      "Instruction decoder"
    ],
    correct: 1,
    explanation: "In the multi-core system diagram, the Shared L3 Cache and DRAM Memory Controller are shared among all cores, while each core has its own L2 cache."
  },
  {
    question: "What makes the DRAM controller vulnerable to denial of service attacks?",
    options: [
      "Poor encryption mechanisms",
      "Unfair scheduling policies that can be exploited by specially written programs",
      "Insufficient bandwidth",
      "Hardware design flaws"
    ],
    correct: 1,
    explanation: "DRAM scheduling policies are unfair to some applications, and programs can be written to exploit this unfairness, making the controller vulnerable to denial of service attacks."
  },
  {
    question: "What is the row size mentioned in the memory hog example?",
    options: [
      "4KB",
      "8KB",
      "16KB",
      "32KB"
    ],
    correct: 1,
    explanation: "In the memory hog example, the row size is 8KB and cache block size is 64B, resulting in 128 (8KB/64B) requests."
  },
  {
    question: "According to the refresh overhead graphs, what percentage of performance overhead can refresh cause?",
    options: [
      "Up to 8%",
      "Up to 46%",
      "Up to 15%",
      "Up to 47%"
    ],
    correct: 1,
    explanation: "According to the refresh overhead performance graph, DRAM refresh can cause up to 46% performance overhead."
  },
  {
    question: "What cooperation approach does the chapter suggest for solving complex system problems?",
    options: [
      "Hardware-only solutions",
      "Software-only solutions",
      "Cooperation between multiple components and layers",
      "Operating system level solutions only"
    ],
    correct: 2,
    explanation: "The chapter emphasizes that cooperation between multiple components and layers can enable more effective solutions and systems."
  },
  {
    question: "In the levels of transformation, what is at the bottom of the hierarchy?",
    options: [
      "Logic",
      "Circuits",
      "Electrons",
      "Microarchitecture"
    ],
    correct: 2,
    explanation: "In the levels of transformation hierarchy, Electrons is at the bottom, representing the most fundamental physical level."
  },
  {
    question: "What does the course aim to enable students to do regarding design decisions?",
    options: [
      "Make decisions within single layers only",
      "Focus only on software optimization",
      "Make design and optimization decisions that cross boundaries of different layers",
      "Specialize in one specific layer"
    ],
    correct: 2,
    explanation: "The course aims to enable students to be comfortable making design and optimization decisions that cross the boundaries of different layers and system components."
  },
  {
    question: "What information does RAIDR expose to solve the refresh problem?",
    options: [
      "CPU utilization patterns",
      "Retention time profile information of DRAM rows",
      "Cache miss rates",
      "Network traffic patterns"
    ],
    correct: 1,
    explanation: "RAIDR exposes retention time profile information of DRAM rows to the memory controller, enabling different refresh rates for different rows based on their retention characteristics."
  },
  {
    question: "What is the relationship between the programmer's view and hardware designer's view in computer systems?",
    options: [
      "They are completely independent",
      "Only the programmer's view matters",
      "The architect/microarchitect's choices critically affect both views",
      "Only the hardware designer's view is important"
    ],
    correct: 2,
    explanation: "The architect/microarchitect's view involves designing computers that meet system design goals, and these choices critically affect both the software programmer and the hardware designer."
  }
],
'Chapter 4: Introduction and Basics': [
  {
    question: "According to Richard Hamming, what is the purpose of computing?",
    options: [
      "To generate numbers and data",
      "To solve mathematical equations",
      "To gain insight, not numbers",
      "To process information quickly"
    ],
    correct: 2,
    explanation: "Richard Hamming stated that 'The purpose of computing is insight, not numbers'. The true value of computing lies not just in generating numbers (data), but in using that data to gain understanding and knowledge (insight)."
  },
  {
    question: "What are the levels of transformation in computer systems from top to bottom?",
    options: [
      "Problem → Algorithm → Program → ISA → Microarchitecture → Logic → Circuits → Electrons",
      "Algorithm → Problem → Program → ISA → Logic → Microarchitecture → Circuits → Electrons",
      "Problem → Program → Algorithm → ISA → Microarchitecture → Logic → Circuits → Electrons",
      "Problem → Algorithm → ISA → Program → Microarchitecture → Logic → Circuits → Electrons"
    ],
    correct: 0,
    explanation: "The correct hierarchy is: Problem → Algorithm → Program/Language → Runtime System → ISA (Architecture) → Microarchitecture → Logic → Circuits → Electrons, representing the transformation from high-level problems to physical implementation."
  },
  {
    question: "What is abstraction in the context of computer systems?",
    options: [
      "A method to make systems more complex",
      "A higher level only needs to know about the interface to the lower level, not how it's implemented",
      "A way to combine multiple levels into one",
      "A technique to eliminate unnecessary components"
    ],
    correct: 1,
    explanation: "Abstraction means that a higher level only needs to know about the interface to the lower level, not how the lower level is implemented. For example, a high-level language programmer doesn't need to know what the ISA is or how a computer executes instructions."
  },
  {
    question: "Why might you need to understand what happens in underlying abstraction layers?",
    options: [
      "Only for academic purposes",
      "When programs run slow, incorrectly, or consume too much energy",
      "To make programming more difficult",
      "It's never necessary to understand underlying layers"
    ],
    correct: 1,
    explanation: "Understanding underlying layers becomes crucial when: the program runs slow, doesn't run correctly, consumes too much energy, or when designing more efficient and higher performance systems."
  },
  {
    question: "In the multi-core system memory performance attack example, what causes the disparity in slowdowns between applications?",
    options: [
      "Different CPU speeds",
      "Cache size differences",
      "DRAM scheduling policy unfairness due to row buffer locality",
      "Operating system scheduling"
    ],
    correct: 2,
    explanation: "The disparity is caused by DRAM scheduling policies being unfair to some applications. Row-hit first policy unfairly prioritizes apps with high row buffer locality, while oldest-first unfairly prioritizes memory-intensive applications."
  },
  {
    question: "What is the FR-FCFS scheduling policy in DRAM controllers?",
    options: [
      "First-Request, First-Come-First-Service",
      "First-Ready, First-Come-First-Service",
      "First-Row, First-Column-First-Service",
      "Fast-Response, First-Come-First-Service"
    ],
    correct: 1,
    explanation: "FR-FCFS stands for First-Ready, First-Come-First-Service. It has two rules: (1) Row-hit first: Service row-hit memory accesses first, (2) Oldest-first: Then service older accesses first."
  },
  {
    question: "What makes a DRAM row-conflict access significantly slower than a row-hit access?",
    options: [
      "CPU processing delays",
      "Cache miss penalties",
      "Need to close current row and open new row in DRAM",
      "Network latency"
    ],
    correct: 2,
    explanation: "A row-conflict access requires closing the currently open row and opening a new row in DRAM, which takes significantly longer than accessing data from an already open row (row-hit)."
  },
  {
    question: "In the memory performance hog example, what characterizes the STREAM access pattern?",
    options: [
      "Random memory access with low row buffer locality",
      "Sequential memory access with very high row buffer locality (96% hit rate)",
      "Scattered memory access with medium locality",
      "Circular memory access pattern"
    ],
    correct: 1,
    explanation: "STREAM is characterized by sequential memory access with very high row buffer locality (96% hit rate) and is memory intensive, making it a memory performance hog."
  },
  {
    question: "What characterizes the RANDOM access pattern in the memory performance example?",
    options: [
      "Sequential access with high locality",
      "Random memory access with very low row buffer locality (3% hit rate)",
      "Structured access with medium locality",
      "Predictable access pattern"
    ],
    correct: 1,
    explanation: "RANDOM is characterized by random memory access with very low row buffer locality (3% hit rate) and is similarly memory intensive compared to STREAM."
  },
  {
    question: "What does a DRAM cell consist of?",
    options: [
      "Two transistors and a resistor",
      "A capacitor and an access transistor",
      "Three capacitors in series",
      "A flip-flop circuit"
    ],
    correct: 1,
    explanation: "A DRAM cell consists of a capacitor and an access transistor. It stores data in terms of charge in the capacitor."
  },
  {
    question: "Why does DRAM need to be refreshed?",
    options: [
      "To improve performance",
      "Because capacitor charge leaks over time",
      "To reduce power consumption",
      "To increase storage capacity"
    ],
    correct: 1,
    explanation: "DRAM capacitor charge leaks over time, so the memory controller needs to refresh each row periodically to restore charge. Typically each row must be refreshed every 64ms."
  },
  {
    question: "What are the main downsides of DRAM refresh?",
    options: [
      "Only increased cost",
      "Only performance degradation",
      "Energy consumption, performance degradation, QoS impact, and capacity scaling limits",
      "Only energy consumption"
    ],
    correct: 2,
    explanation: "DRAM refresh has multiple downsides: energy consumption (each refresh consumes energy), performance degradation (DRAM unavailable while refreshed), QoS/predictability impact (long pause times), and refresh rate limits DRAM capacity scaling."
  },
  {
    question: "What is the typical refresh period for DRAM rows?",
    options: [
      "64 microseconds",
      "64 milliseconds",
      "64 seconds",
      "64 nanoseconds"
    ],
    correct: 1,
    explanation: "The typical refresh period is 64 milliseconds (64 ms). Each row must be activated (refreshed) every 64 ms to restore the charge in the capacitors."
  },
  {
    question: "What key observation does RAIDR make about DRAM refresh?",
    options: [
      "All rows need frequent refresh",
      "Most DRAM rows can be refreshed much less often without losing data",
      "Refresh is unnecessary",
      "Only some rows need any refresh"
    ],
    correct: 1,
    explanation: "RAIDR observes that most DRAM rows can be refreshed much less often without losing data, leading to the idea of refreshing rows containing weak cells more frequently and other rows less frequently."
  },
  {
    question: "How does RAIDR achieve refresh reduction?",
    options: [
      "By eliminating refresh entirely",
      "By profiling retention times, binning rows, and refreshing different bins at different rates",
      "By using different DRAM technology",
      "By increasing refresh frequency for all rows"
    ],
    correct: 1,
    explanation: "RAIDR works in three steps: (1) Profiling retention time of all rows, (2) Binning rows by retention time in memory controller using Bloom Filters, (3) Refreshing rows in different bins at different rates."
  },
  {
    question: "What are the benefits achieved by RAIDR?",
    options: [
      "Only performance improvement",
      "74.6% refresh reduction, ~16%/20% DRAM power reduction, ~9% performance improvement",
      "Only power reduction",
      "Only refresh reduction"
    ],
    correct: 1,
    explanation: "RAIDR achieves multiple benefits: 74.6% refresh reduction with only 1.25KB storage overhead, ~16%/20% DRAM dynamic/idle power reduction, and ~9% performance improvement, with benefits increasing with DRAM capacity."
  },
  {
    question: "What is one of the two key goals of the computer architecture course mentioned in the lecture?",
    options: [
      "To learn programming languages",
      "To understand how a processor works underneath the software layer",
      "To design operating systems",
      "To build hardware components"
    ],
    correct: 1,
    explanation: "One key goal is to understand how a processor works underneath the software layer and how decisions made in hardware affect the software/programmer."
  },
  {
    question: "What is the second key goal of the computer architecture course?",
    options: [
      "To memorize instruction sets",
      "To enable making design and optimization decisions that cross boundaries of different layers",
      "To focus only on hardware design",
      "To specialize in one abstraction layer"
    ],
    correct: 1,
    explanation: "The second key goal is to enable students to be comfortable in making design and optimization decisions that cross the boundaries of different layers and system components."
  },
  {
    question: "In the memory performance hog scenario, approximately how many requests of the STREAM application (T0) are serviced before the RANDOM application (T1) gets served?",
    options: [
      "64 requests",
      "96 requests",
      "128 requests",
      "256 requests"
    ],
    correct: 2,
    explanation: "With a row size of 8KB and cache block size of 64B, there are 128 (8KB/64B) requests of T0 (STREAM) serviced before T1 (RANDOM) gets a chance, demonstrating the unfairness of the row-hit first policy."
  },
  {
    question: "What is the main takeaway about abstraction layers from this lecture?",
    options: [
      "Abstraction layers should never be crossed",
      "Breaking abstraction layers and knowing what is underneath enables problem solving",
      "Only hardware designers need to understand multiple layers",
      "Abstraction layers are only theoretical concepts"
    ],
    correct: 1,
    explanation: "The main takeaway is that breaking the abstraction layers (between components and transformation hierarchy levels) and knowing what is underneath enables you to solve problems and design better future systems. Cooperation between multiple components and layers can enable more effective solutions."
  }
],
'Chapter 5: What is A Computer and Von Neumann Model': [
  {
    question: "What are the three key components that define a computer?",
    options: [
      "Hardware, software, and users",
      "Computation, communication, and storage (memory)",
      "Input, processing, and output",
      "CPU, RAM, and hard drive"
    ],
    correct: 1,
    explanation: "A computer is defined by three key components: Computation (processing), Communication (I/O), and Storage (memory). These components work together to form a complete computing system."
  },
  {
    question: "What are the two key properties of the Von Neumann model?",
    options: [
      "Fast processing and large memory",
      "Stored program and sequential instruction processing",
      "Multiple cores and parallel processing",
      "Input/output capabilities and user interface"
    ],
    correct: 1,
    explanation: "The Von Neumann model has two key properties: (1) Stored program - instructions stored in linear memory array with unified memory for instructions and data, (2) Sequential instruction processing - one instruction processed at a time with Program Counter identifying current instruction."
  },
  {
    question: "In the Von Neumann model, what determines whether a stored value is interpreted as an instruction?",
    options: [
      "The value itself",
      "The memory location",
      "The control signals",
      "The data type"
    ],
    correct: 2,
    explanation: "In the Von Neumann model, the interpretation of a stored value depends on the control signals. The same bit pattern can be interpreted as data or as an instruction depending on how the control unit processes it."
  },
  {
    question: "What is another name for the Von Neumann architecture?",
    options: [
      "Parallel processing computer",
      "Stored program computer",
      "Data flow computer",
      "Multi-core computer"
    ],
    correct: 1,
    explanation: "The Von Neumann architecture is also called a 'stored program computer' because instructions are stored in memory along with data, rather than being hardwired into the machine."
  },
  {
    question: "In the Von Neumann model, how is the Program Counter (instruction pointer) advanced?",
    options: [
      "Randomly based on available instructions",
      "Based on data availability",
      "Sequentially except for control transfer instructions",
      "In parallel for multiple instructions"
    ],
    correct: 2,
    explanation: "The Program Counter is advanced sequentially except for control transfer instructions (like jumps, branches, calls). This sequential advancement is a fundamental characteristic of Von Neumann execution."
  },
  {
    question: "In the dataflow model, when is an instruction executed?",
    options: [
      "When the instruction pointer points to it",
      "When all its operands are ready",
      "In sequential order",
      "When the CPU is idle"
    ],
    correct: 1,
    explanation: "In the dataflow model, an instruction is executed when all its operands are ready (i.e., when all inputs have tokens). There is no instruction pointer - execution is driven by data availability."
  },
  {
    question: "What is the main difference between Von Neumann and dataflow execution models?",
    options: [
      "Von Neumann uses more memory",
      "Von Neumann is control-driven/sequential, dataflow is data-driven/parallel",
      "Dataflow is slower than Von Neumann",
      "Von Neumann requires special hardware"
    ],
    correct: 1,
    explanation: "Von Neumann model is control-driven with sequential execution (instruction pointer controls order), while dataflow model is data-driven with potentially parallel execution (data availability controls order)."
  },
  {
    question: "Which execution model is inherently more parallel?",
    options: [
      "Von Neumann model",
      "Dataflow model",
      "Both are equally parallel",
      "Neither supports parallelism"
    ],
    correct: 1,
    explanation: "The dataflow model is inherently more parallel because multiple instructions can 'fire' (execute) simultaneously when their operands are ready, unlike Von Neumann's sequential execution model."
  },
  {
    question: "In a dataflow machine, what causes a data flow node to 'fire'?",
    options: [
      "A clock signal",
      "The instruction pointer",
      "When all its inputs have tokens (are ready)",
      "A random trigger"
    ],
    correct: 2,
    explanation: "A data flow node fires (is fetched and executed) when all its inputs are ready, i.e., when all inputs have tokens. This is the fundamental execution principle of dataflow computing."
  },
  {
    question: "What major instruction set architectures use the Von Neumann model today?",
    options: [
      "Only x86",
      "x86, ARM, MIPS, SPARC, Alpha, POWER",
      "Only ARM and x86",
      "Only older architectures"
    ],
    correct: 1,
    explanation: "All major instruction set architectures today use the Von Neumann model, including x86, ARM, MIPS, SPARC, Alpha, and POWER architectures."
  },
  {
    question: "At the microarchitecture level, how do modern processors actually execute instructions?",
    options: [
      "Exactly as specified by Von Neumann model",
      "Very differently from Von Neumann model (pipelined, out-of-order, etc.)",
      "Only in sequential order",
      "Without any optimization"
    ],
    correct: 1,
    explanation: "Modern microarchitectures execute very differently from the Von Neumann model - using pipelined execution, multiple instructions at a time, out-of-order execution, and separate instruction/data caches, but this is not exposed to software."
  },
  {
    question: "What is the key difference between ISA and microarchitecture?",
    options: [
      "ISA is hardware, microarchitecture is software",
      "ISA is the agreed interface between SW/HW, microarchitecture is the specific implementation",
      "They are the same thing",
      "ISA is old, microarchitecture is new"
    ],
    correct: 1,
    explanation: "ISA is the agreed upon interface between software and hardware (what software writer needs to know), while microarchitecture is the specific implementation of an ISA (not visible to software)."
  },
  {
    question: "Using the car analogy, what represents ISA vs. microarchitecture?",
    options: [
      "Engine vs. wheels",
      "Gas pedal (interface) vs. engine internals (implementation)",
      "Steering wheel vs. brakes",
      "Exterior vs. interior"
    ],
    correct: 1,
    explanation: "The gas pedal represents ISA (interface for 'acceleration' that driver uses), while the internals of the engine represent microarchitecture (how 'acceleration' is actually implemented)."
  },
  {
    question: "Which changes faster: ISA or microarchitecture?",
    options: [
      "ISA changes faster",
      "Microarchitecture changes faster",
      "They change at the same rate",
      "Neither changes"
    ],
    correct: 1,
    explanation: "Microarchitecture usually changes faster than ISA. There are few ISAs (x86, ARM, SPARC, MIPS, Alpha) but many microarchitectures. For example, x86 ISA has many implementations: 286, 386, 486, Pentium, Pentium Pro, Pentium 4, Core, etc."
  },
  {
    question: "What does superscalar processing refer to?",
    options: [
      "Using multiple CPU cores",
      "A technique to execute multiple instructions in parallel within the same processor core",
      "Increasing clock frequency",
      "Adding more memory"
    ],
    correct: 1,
    explanation: "Superscalar processing is a technique used in modern microprocessor design to increase instruction throughput by executing multiple instructions in parallel within the same processor core, allowing more than one instruction per clock cycle."
  },
  {
    question: "Which of the following is part of the ISA?",
    options: [
      "Number of ports to the register file",
      "ADD instruction's opcode",
      "Whether machine employs pipelined execution",
      "Number of cycles to execute MUL instruction"
    ],
    correct: 1,
    explanation: "ADD instruction's opcode is part of the ISA as it defines the instruction interface. Number of register file ports, pipelining, and execution cycles are microarchitecture implementation details not visible to software."
  },
  {
    question: "Which of the following is part of microarchitecture?",
    options: [
      "Number of general purpose registers",
      "Instruction opcodes",
      "Number of ports to the register file",
      "Memory addressing modes"
    ],
    correct: 2,
    explanation: "Number of ports to the register file is a microarchitecture detail (implementation choice for performance). Number of registers, opcodes, and addressing modes are ISA specifications visible to programmers."
  },
  {
    question: "What does ISA specify regarding instructions?",
    options: [
      "Only the instruction format",
      "Opcodes, addressing modes, data types, instruction types and formats, registers, condition codes",
      "Only the execution time",
      "Only the memory requirements"
    ],
    correct: 1,
    explanation: "ISA specifies comprehensive instruction-related elements: opcodes, addressing modes, data types, instruction types and formats, registers, and condition codes - everything a programmer needs to know to write programs."
  },
  {
    question: "Which of the following are microarchitecture implementation choices?",
    options: [
      "Virtual memory management",
      "Pipelining, out-of-order execution, caching policies, superscalar processing",
      "Instruction set definition",
      "Memory addressing modes"
    ],
    correct: 1,
    explanation: "Microarchitecture includes implementation choices like pipelining, in-order vs out-of-order execution, memory access scheduling, superscalar processing, caching policies, prefetching, etc. - all done without exposure to software."
  },
  {
    question: "In the out-of-order execution example with instructions (1) mov eax,0 (2) mov edx,1 (3) mov edx,3 (4) inc edx (5) mov ecx,3, what determines the execution order?",
    options: [
      "The original program order must be maintained",
      "The transistors/hardware decides based on dependencies and available resources",
      "Random selection",
      "Always execute in reverse order"
    ],
    correct: 1,
    explanation: "In out-of-order execution, the transistors (hardware) decide which instructions to execute based on data dependencies and available execution resources, while maintaining the correct program semantics."
  }
],
'Chapter 6: Introduction to ISA Tradeoffs': [
  {
    question: "What is a design point in computer architecture?",
    options: [
      "A specific location on the processor chip",
      "A set of design considerations and their importance that leads to tradeoffs",
      "The final stage of processor design",
      "A testing methodology for processors"
    ],
    correct: 1,
    explanation: "A design point is a set of design considerations and their importance that leads to tradeoffs in both ISA and microarchitecture. It's determined by the application space and intended users/market."
  },
  {
    question: "Which of the following are key design considerations mentioned in the lecture?",
    options: [
      "Only cost and performance",
      "Cost, performance, power consumption, energy consumption, availability, reliability, time to market",
      "Only performance and reliability",
      "Hardware complexity and software compatibility"
    ],
    correct: 1,
    explanation: "The key design considerations include: Cost, Performance, Maximum power consumption, Energy consumption (battery life), Availability, Reliability and Correctness, and Time to Market."
  },
  {
    question: "What determines the design point of a computer system?",
    options: [
      "The available technology",
      "The manufacturing cost",
      "The 'Problem' space (application space) and intended users/market",
      "Government regulations"
    ],
    correct: 2,
    explanation: "The design point is determined by the 'Problem' space (application space) and the intended users/market, which influences the relative importance of different design considerations."
  },
  {
    question: "What are the two main components of an instruction?",
    options: [
      "Address and data",
      "Opcode and operands",
      "Source and destination",
      "Input and output"
    ],
    correct: 1,
    explanation: "An instruction consists of: (1) opcode - what the instruction does, and (2) operands - who it is to do it to. This is the basic element of the HW/SW interface."
  },
  {
    question: "What is the concept of 'bit steering' in instruction encoding?",
    options: [
      "Using bits to control data flow direction",
      "A bit in the instruction determines the interpretation of other bits",
      "Steering bits toward the ALU",
      "Managing bit-level operations"
    ],
    correct: 1,
    explanation: "Bit steering is a concept where a bit in the instruction determines the interpretation of other bits, allowing for more efficient use of the instruction encoding space."
  },
  {
    question: "In a 0-address (stack) machine, how are operations performed?",
    options: [
      "Using registers only",
      "Operations work on top elements of the stack (push/pop)",
      "Direct memory addressing",
      "Using accumulator register"
    ],
    correct: 1,
    explanation: "In a 0-address stack machine, operations work on the top elements of the stack. Operands are pushed onto the stack, operations are performed on stack top elements, and results are popped off."
  },
  {
    question: "What characterizes a 1-address (accumulator) machine?",
    options: [
      "All operations use stack",
      "Operations use accumulator register (op ACC, ld A, st A)",
      "Two operands per instruction",
      "Three separate operands"
    ],
    correct: 1,
    explanation: "In a 1-address accumulator machine, operations typically involve the accumulator register (ACC). Instructions like 'op ACC', 'ld A' (load into ACC), 'st A' (store from ACC) are characteristic."
  },
  {
    question: "In a 2-address machine, what happens to one of the operands?",
    options: [
      "It remains unchanged",
      "One operand is both source and destination (gets clobbered)",
      "It gets copied to memory",
      "It gets pushed to stack"
    ],
    correct: 1,
    explanation: "In a 2-address machine (op S,D), one operand serves as both source and destination, meaning the original value gets overwritten (clobbered) with the operation result."
  },
  {
    question: "What is the main advantage of a 3-address machine?",
    options: [
      "Smaller instruction size",
      "Source and destination are separate (op S1,S2,D)",
      "Faster execution",
      "Lower power consumption"
    ],
    correct: 1,
    explanation: "In a 3-address machine (op S1,S2,D), the source operands and destination are separate, which means source values are preserved and not clobbered during operations."
  },
  {
    question: "What are the main advantages of stack machines?",
    options: [
      "Large instruction size and complex logic",
      "Small instruction size, simpler logic, compact code, efficient procedure calls",
      "High flexibility and parallel operations",
      "Complex data type support"
    ],
    correct: 1,
    explanation: "Stack machines have: small instruction size (no operands needed for operate instructions), simpler logic, compact code, and efficient procedure calls (all parameters on stack with no additional cycles for parameter passing)."
  },
  {
    question: "What are the main disadvantages of stack machines?",
    options: [
      "Large code size and slow execution",
      "Computations not easily expressible in postfix notation are difficult; limited flexibility",
      "High power consumption",
      "Complex instruction decoding"
    ],
    correct: 1,
    explanation: "Stack machines have disadvantages: computations not easily expressible with postfix notation are difficult to map, cannot perform operations on many values simultaneously (only top N values), and lack flexibility."
  },
  {
    question: "The PDP-11 is an example of which type of machine?",
    options: [
      "0-address (stack) machine",
      "1-address (accumulator) machine",
      "2-address machine",
      "3-address machine"
    ],
    correct: 2,
    explanation: "The PDP-11 is a 2-address machine. Its ADD instruction has a 4-bit opcode and 2 6-bit operand specifiers, with limited bits to specify an instruction."
  },
  {
    question: "What is the main disadvantage of the PDP-11's 2-address design?",
    options: [
      "Too many operands",
      "One source operand is always clobbered with the result",
      "Instructions are too long",
      "Cannot access memory"
    ],
    correct: 1,
    explanation: "In PDP-11's 2-address design, one source operand is always clobbered (overwritten) with the result of the instruction, requiring additional steps to preserve original values when needed."
  },
  {
    question: "What type of machine is the Alpha architecture?",
    options: [
      "2-address memory/memory machine",
      "Stack machine",
      "3-address load/store machine",
      "1-address accumulator machine"
    ],
    correct: 2,
    explanation: "Alpha is a 3-address load/store machine, meaning it has separate source and destination operands, and memory access is only through explicit load and store instructions."
  },
  {
    question: "What type of machine is x86?",
    options: [
      "3-address load/store machine",
      "2-address memory/memory machine",
      "Stack machine only",
      "1-address accumulator machine"
    ],
    correct: 1,
    explanation: "x86 is a 2-address memory/memory machine, meaning it can perform operations directly between memory locations and registers, with one operand serving as both source and destination."
  },
  {
    question: "How is a data type defined in ISA context?",
    options: [
      "Any binary representation",
      "Representation of information for which there are instructions that operate on the representation",
      "Only primitive types like integers",
      "Memory storage format only"
    ],
    correct: 1,
    explanation: "A data type is defined as a representation of information for which there are instructions that operate on that representation. It's not just about storage format, but about having instruction support."
  },
  {
    question: "Which of the following are examples of data types mentioned?",
    options: [
      "Only integer and floating point",
      "Integer, floating point, character, binary, decimal, BCD, doubly linked list, queue, string, bit vector, stack",
      "Only primitive data types",
      "Only numeric types"
    ],
    correct: 1,
    explanation: "The lecture mentions various data types: Integer, floating point, character, binary, decimal, BCD, doubly linked list, queue, string, bit vector, and stack - ranging from primitive to complex structured types."
  },
  {
    question: "What is an example of a high-level data type instruction from VAX?",
    options: [
      "ADD and SUB only",
      "INSQUEUE (Insert Queue) and REMQUEUE (Remove Queue) on doubly linked lists",
      "Only load and store",
      "Basic arithmetic operations"
    ],
    correct: 1,
    explanation: "VAX provided high-level instructions like INSQUEUE (Insert Queue) and REMQUEUE (Remove Queue) that operated on doubly linked lists or queues, and FINDFIRST for complex data structure operations."
  },
  {
    question: "What does the 'semantic gap' refer to in computer architecture?",
    options: [
      "Physical distance between components",
      "The disparity between high-level software concepts and low-level hardware operations",
      "Time delay in instruction execution",
      "Memory access latency"
    ],
    correct: 1,
    explanation: "The semantic gap refers to the disparity between high-level concepts and abstractions used in software programming and the low-level operations and mechanisms implemented in hardware."
  },
  {
    question: "How do Early RISC architectures and Intel 432 differ in terms of semantic gap?",
    options: [
      "Both have the same approach",
      "Early RISC: only integer data type (large gap); Intel 432: object data type, capability-based (small gap)",
      "Both focus on complex data types",
      "Both use only primitive types"
    ],
    correct: 1,
    explanation: "Early RISC architectures had only integer data types (creating a large semantic gap), while Intel 432 supported object data types and was capability-based (attempting to close the semantic gap with high-level features)."
  }
],
  'Chapter 7: ISA Tradeoffs': [
    // Data Types (Pages 3-5)
    {
      question: "Which ISA introduced dedicated instructions for doubly linked list operations like INSQUEUE?",
      options: ["x86", "VAX", "MIPS", "ARM"],
      correct: 1,
      explanation: "VAX had specialized instructions for queue/list operations, reflecting its CISC design philosophy."
    },
    {
      question: "What was the primary data type supported in early RISC architectures?",
      options: ["Floating point", "Integer only", "Object references", "Binary-coded decimal"],
      correct: 1,
      explanation: "Early RISC designs like MIPS supported only integers to maintain simplicity."
    },

    // Semantic Gap (Pages 5,25)
    {
      question: "The Intel 432's object data types illustrate what kind of semantic gap approach?",
      options: ["Maximized gap", "Minimized gap", "No gap", "Variable gap"],
      correct: 1,
      explanation: "Intel 432 aimed to minimize the gap by supporting high-level constructs directly in hardware."
    },

    // Memory Organization (Pages 6-8)
    {
      question: "In a 32-bit addressable system like the first Alpha, how would you add two 32-bit numbers?",
      options: [
        "Using two 32-bit load/store instructions",
        "With a single 64-bit ADD instruction",
        "Through memory-memory operations",
        "Using bit-addressable operations"
      ],
      correct: 0,
      explanation: "Required multiple operations due to 32-bit addressability constraints."
    },

    {
      question: "Which architecture uses big-endian byte ordering?",
      options: ["x86", "PowerPC", "ARM (little-endian mode)", "Original PCI bus"],
      correct: 1,
      explanation: "PowerPC and SPARC are notable big-endian architectures."
    },
    {
      question: "In little-endian systems, how is the value 0x12345678 stored at address A?",
      options: [
        "A:12 A+1:34 A+2:56 A+3:78",
        "A:78 A+1:56 A+2:34 A+3:12",
        "A:56 A+1:78 A+2:12 A+3:34",
        "Split across cache lines"
      ],
      correct: 1,
      explanation: "Little-endian stores least significant byte at lowest address."
    },

    // Registers (Pages 9-12)
    {
      question: "What characteristic of programs justifies having registers in an ISA?",
      options: [
        "Spatial locality",
        "Data locality (temporal and spatial)",
        "Memory wall effect",
        "Von Neumann bottleneck"
      ],
      correct: 1,
      explanation: "Registers exploit temporal locality (reused data) and spatial locality (nearby data)."
    },
    {
      question: "How many general-purpose registers did IA-64 (Itanium) introduce?",
      options: ["8", "16", "32", "128"],
      correct: 3,
      explanation: "IA-64 expanded to 128 registers for explicit parallelism."
    },

    // Programmer Invisible State (Pages 10-11)
    {
      question: "Why can't programmers directly access pipeline registers?",
      options: [
        "They are protected by the OS",
        "They represent microarchitectural state",
        "They are physically inaccessible",
        "They violate memory protection"
      ],
      correct: 1,
      explanation: "Pipeline registers are part of implementation-specific microarchitecture."
    },

    // Instruction Classes (Page 13)
    {
      question: "Which instruction class changes the sequence of execution?",
      options: [
        "Operate instructions",
        "Data movement instructions",
        "Control flow instructions",
        "Floating-point instructions"
      ],
      correct: 2,
      explanation: "Control flow instructions (branches/jumps) alter the PC."
    },

    // Addressing Modes (Pages 14-19)
    {
      question: "Which addressing mode combines a base register and index register?",
      options: [
        "Displacement",
        "Register indirect",
        "Indexed addressing",
        "Memory indirect"
      ],
      correct: 2,
      explanation: "Indexed addressing uses base + index calculation."
    },
    {
      question: "What does 'orthogonal ISA' mean?",
      options: [
        "Instructions use only right angles",
        "All instructions can use all addressing modes",
        "Fixed 90-degree instruction alignment",
        "Separate integer/floating-point pipelines"
      ],
      correct: 1,
      explanation: "Orthogonality means uniform combination of operations and addressing modes."
    },

    {
      question: "What is a key advantage of variable-length instructions?",
      options: [
        "Simpler hardware decoding",
        "Better code density",
        "Faster clock speeds",
        "More registers"
      ],
      correct: 1,
      explanation: "Variable-length enables compact encoding (e.g., x86)."
    },
    {
      question: "Which field in MIPS I-type instructions holds the immediate value?",
      options: ["rs", "rt", "opcode", "16-bit immediate field"],
      correct: 3,
      explanation: "I-type uses 16-bit immediate for constants/offsets."
    },

    {
      question: "What was a major disadvantage of complex CISC instructions?",
      options: [
        "Limited compiler optimization opportunities",
        "Too many registers",
        "Fixed-length encoding",
        "Lack of virtual memory support"
      ],
      correct: 0,
      explanation: "Complex instructions created coarse-grained operations that constrained optimizations."
    },
    {
      question: "Which VAX instruction provided array access with bounds checking?",
      options: ["MOV", "INDEX", "BOUNDS", "ARRAY"],
      correct: 1,
      explanation: "VAX INDEX instruction exemplified high-level language support."
    },

    {
      question: "Which characteristic is NOT typical of RISC designs?",
      options: [
        "Many addressing modes",
        "Uniform decode",
        "Fixed-length instructions",
        "Load/store architecture"
      ],
      correct: 0,
      explanation: "RISC minimizes addressing modes for simplicity."
    },
    {
      question: "What motivated the x86's instruction prefixes?",
      options: [
        "Backward compatibility",
        "Faster decoding",
        "Fewer registers",
        "Big-endian support"
      ],
      correct: 0,
      explanation: "Prefixes allowed extending the ISA while maintaining compatibility."
    },

    {
      question: "What drove ISA evolution according to the chapter?",
      options: [
        "Compiler limitations",
        "Memory constraints",
        "Specialization needs",
        "All of the above"
      ],
      correct: 3,
      explanation: "All these factors historically influenced ISA design."
    },

    {
      question: "How many bytes can x86 instruction prefixes occupy?",
      options: ["0", "1", "Up to 4", "Exactly 2"],
      correct: 2,
      explanation: "x86 allows up to four 1-byte prefixes."
    },
    {
      question: "What MIPS instruction format has a 26-bit immediate?",
      options: ["R-type", "I-type", "J-type", "U-type"],
      correct: 2,
      explanation: "J-type (jump) uses 26-bit immediates for address targets."
    }
  ],
  'Chapter 8: Single-Cycle Microarchitecture': [
{
question: "What is the primary purpose of cache memory?",
options: [
"To permanently store all program instructions",
"To store active/commonly used instructions and speed up processing",
"To replace the main memory entirely",
"To store only the results of arithmetic operations"
],
correct: 1,
explanation: "Cache memory temporarily stores active or frequently used instructions to speed up processing and reduce bottlenecks between RAM and the CPU."
},
{
question: "During the fetch part of the instruction cycle, what is the role of the address bus?",
options: [
"It carries the instruction's opcode to the ALU",
"It carries the address of the instruction to main memory",
"It stores the result of the executed instruction",
"It decodes the instruction for the control unit"
],
correct: 1,
explanation: "The address bus carries the memory address of the instruction to be fetched from main memory to the CPU."
},
{
question: "Which of the following is a drawback of higher clock speeds in CPUs?",
options: [
"Fewer instructions can be executed per second",
"The CPU may overheat and require more cooling",
"Programs run slower due to increased complexity",
"The data bus width is reduced"
],
correct: 1,
explanation: "Higher clock speeds increase power consumption and heat generation, potentially causing overheating and requiring additional cooling solutions."
},
{
question: "In a single-cycle microarchitecture, how many clock cycles does each instruction take to execute?",
options: [
"One cycle",
"Two cycles",
"Variable cycles depending on the instruction",
"Six cycles (one per phase)"
],
correct: 0,
explanation: "In a single-cycle microarchitecture, all phases of an instruction (fetch, decode, execute, etc.) are completed within a single clock cycle."
},
{
question: "What determines the clock cycle time in a single-cycle microarchitecture?",
options: [
"The fastest instruction",
"The average instruction latency",
"The slowest instruction",
"The number of functional units"
],
correct: 2,
explanation: "The slowest instruction dictates the clock cycle time because all instructions must complete within one cycle."
} 
],  
'Chapter 9: Multi-Cycle and Pipelined Microarchitecture' : [
{
question: "How does a multi-cycle microarchitecture differ from a single-cycle design?",
options: [
"Instructions always take fewer cycles to complete",
"Each phase of the instruction cycle may span multiple clock cycles",
"It eliminates the need for a control unit",
"It uses a smaller data bus"
],
correct: 1,
explanation: "In a multi-cycle microarchitecture, each phase (fetch, decode, etc.) can take multiple clock cycles, allowing for shorter cycle times."
},
{
question: "What is a key advantage of multi-cycle machines over single-cycle machines?",
options: [
"The slowest instruction determines the cycle time",
"Clock cycle time is shorter as it depends on the slowest stage, not instruction",
"They require no control signals",
"All instructions execute in parallel"
],
correct: 1,
explanation: "Multi-cycle machines break instructions into stages, allowing the clock cycle time to be determined by the slowest stage rather than the slowest instruction."
},
{
question: "Which component generates control signals to coordinate the datapath in instruction processing?",
options: [
"ALU",
"Cache memory",
"Control logic",
"Address bus"
],
correct: 2,
explanation: "The control logic decodes instructions and generates signals to direct the datapath (e.g., ALU, registers) on how to process data."
},
{
question: "What happens to the program counter (PC) during the fetch stage?",
options: [
"It is reset to zero",
"It is incremented to point to the next instruction",
"It stores the result of the ALU operation",
"It holds the opcode for decoding"
],
correct: 1,
explanation: "After fetching an instruction, the PC is incremented to point to the next instruction in memory."
},
{
question: "Which of the following is true about the execute stage?",
options: [
"It retrieves the instruction from main memory",
"It decodes the opcode into control signals",
"It performs the actual operation (e.g., ALU computation)",
"It stores the result in the instruction register"
],
correct: 2,
explanation: "The execute stage carries out the operation specified by the instruction, such as arithmetic in the ALU or data transfer."
}
],
'Chapter 10: Introduction to Microarchitecture' : [
{
question: "What is the key characteristic of a single-cycle microarchitecture?",
options: [
"All instructions complete execution in one clock cycle",
"Instructions are pipelined across multiple cycles",
"Only arithmetic instructions use a single cycle",
"Memory access takes variable cycles depending on latency"
],
correct: 0,
explanation: "In a single-cycle microarchitecture, every instruction (e.g., ALU, load/store) completes all stages (fetch, decode, execute, etc.) within one clock cycle."
},

{
question: "Which component is responsible for holding the current instruction address in the single-cycle datapath?",
options: [
"Register file",
"Program counter (PC)",
"ALU",
"Data memory"
],
correct: 1,
explanation: "The program counter (PC) stores the address of the current instruction being executed and increments by 4 (for MIPS) after each fetch."
},

{
question: "What is the role of the 'sign-extend' unit in the datapath?",
options: [
"To convert 16-bit immediate values to 32-bit signed values",
"To perform arithmetic operations",
"To select between register or immediate operands",
"To manage memory addresses"
],
correct: 0,
explanation: "The sign-extend unit expands 16-bit immediate values (e.g., in I-type instructions) to 32 bits while preserving the sign for correct arithmetic operations."
},

{
question: "Which control signal determines whether the ALU uses a register value or an immediate value as its second operand?",
options: [
"RegWrite",
"ALUSrc",
"MemtoReg",
"Branch"
],
correct: 1,
explanation: "ALUSrc selects between the second register operand (e.g., for R-type) or a sign-extended immediate (e.g., for ADDI/LW/SW)."
},

{
question: "What happens during the 'MEM' stage of the LW instruction?",
options: [
"The ALU computes the effective memory address",
"Data is read from memory and written to a register",
"The instruction is fetched from memory",
"The PC is updated"
],
correct: 1,
explanation: "In the MEM stage, the data memory is accessed using the address computed in EX, and the result is later written back to a register in WB."
},

{
question: "Which instruction type requires the 'RegDst' control signal to select the destination register from bits [15:11]?",
options: [
"I-type (e.g., ADDI)",
"R-type (e.g., ADD)",
"Load (e.g., LW)",
"Store (e.g., SW)"
],
correct: 1,
explanation: "R-type instructions use bits [15:11] for the destination register (rd), while I-type (e.g., ADDI/LW) use bits [20:16] (rt)."
},

{
question: "Why is the single-cycle design inefficient for real-world implementations?",
options: [
"It cannot handle branch instructions",
"The clock cycle must accommodate the slowest instruction (e.g., LW)",
"It lacks a register file",
"Memory accesses are asynchronous"
],
correct: 1,
explanation: "The clock cycle length is determined by the slowest instruction (e.g., LW, which uses memory access), making faster instructions (e.g., ADD) unnecessarily slow."
},

{
question: "What is the purpose of the 'MemtoReg' multiplexer in the datapath?",
options: [
"To select between ALU result or memory data for register writeback",
"To choose between register operands",
"To extend immediate values",
"To compute branch targets"
],
correct: 0,
explanation: "MemtoReg selects whether the writeback data comes from the ALU result (e.g., for ADD) or memory (e.g., for LW)."
},
],

  'General 1': [
    {
      "question": "RAID level ___ has the highest disk overhead of all RAID types.",
      "options": [
        "0",
        "1",
        "3",
        "5"
      ],
      "correct": 1,
      "explanation": "RAID 1 (mirroring) duplicates all data, meaning it requires twice the disk space for the same amount of data, hence the highest disk overhead."
    },
    {
      "question": "Disk arrays may be consolidated or virtualized in a ____.",
      "options": [
        "RAID",
        "NAS",
        "SAN",
        "SAS"
      ],
      "correct": 2,
      "explanation": "A Storage Area Network (SAN) provides block-level storage and allows for consolidation and virtualization of disk arrays across multiple servers."
    },
    {
      "question": "What is the minimum number of disks required for RAID 1? ___.",
      "options": [
        "1",
        "2",
        "4",
        "5"
      ],
      "correct": 1,
      "explanation": "RAID 1 involves mirroring, which means data is duplicated across two or more disks. Therefore, a minimum of two disks is required."
    },
    {
      "question": "The ______ was designed to provide a powerful and flexible instruction set within the constraints of a 16-bit minicomputer.",
      "options": [
        "PDP-10",
        "PDP-11",
        "VAX",
        "ARM"
      ],
      "correct": 1,
      "explanation": "The PDP-11 was a highly influential 16-bit minicomputer developed by Digital Equipment Corporation (DEC) known for its flexible and powerful instruction set."
    },
    {
      "question": "The cache bridges the speed gap between ______ and ______.",
      "options": [
        "RAM and ROM",
        "Processor and RAM",
        "RAM and Secondary memory",
        "None of the mentioned"
      ],
      "correct": 1,
      "explanation": "Cache memory is a small, fast memory that stores frequently used data and instructions, reducing the time the processor has to wait for data from the slower main RAM."
    },
    {
      "question": "The ______ is the part of the computer that sequences and executes instructions.",
      "options": [
        "CPU",
        "memory",
        "bus",
        "input/output devices"
      ],
      "correct": 0,
      "explanation": "The Central Processing Unit (CPU) is the 'brain' of the computer, responsible for fetching, decoding, and executing instructions, as well as performing arithmetic and logical operations."
    },
    {
      "question": "A high-speed, special-purpose network that integrates different types of data storage devices into a single storage system and connects them to computing resources across an entire organization is called a ______.",
      "options": [
        "network-attached storage",
        "storage area network",
        "storage as a service",
        "enterprise data storage solution"
      ],
      "correct": 1,
      "explanation": "A Storage Area Network (SAN) is a dedicated high-speed network that provides access to consolidated, block-level data storage."
    },
    {
      "question": "Load/store architecture: operate instructions operate only on ______.",
      "options": [
        "Memory",
        "Register",
        "immediate",
        "register indirect"
      ],
      "correct": 1,
      "explanation": "In load/store architectures (like RISC), arithmetic and logical operations only work on data that is already in processor registers. Data must be explicitly loaded from memory into registers before operations, and stored back to memory after."
    },
    {
      "question": "The use of multiple processors on the same chip is referred to as ______ and provides the potential to increase performance without increasing the clock rate.",
      "options": [
        "multicore",
        "GPU",
        "data channels",
        "MPC"
      ],
      "correct": 0,
      "explanation": "Multicore processors integrate multiple independent processing units (cores) onto a single chip, allowing for parallel execution of tasks and improving performance without solely relying on higher clock speeds."
    },
    {
      "question": "A measurement of how many tasks a computer can accomplish in a certain amount of time is called a ______.",
      "options": [
        "throughput",
        "application analysis",
        "cycle speed",
        "real-time system"
      ],
      "correct": 0,
      "explanation": "Throughput refers to the rate at which a system processes data or completes tasks. It's a measure of system performance."
    },
    {
      "question": "Employed to temporarily hold the right-hand instruction from word in memory.",
      "options": [
        "MBR",
        "MAR",
        "IBR",
        "PC"
      ],
      "correct": 2,
      "explanation": "The Instruction Buffer Register (IBR) is used in some architectures to temporarily hold the next instruction to be executed, often when instructions are fetched in pairs (e.g., in early computers like the IAS machine)."
    },
    {
      "question": "A computer consists of ______, memory cells, and interconnections among these elements.",
      "options": [
        "circuits",
        "CPU",
        "gates",
        "chips"
      ],
      "correct": 2,
      "explanation": "A computer fundamentally consists of gates (for processing logic), memory cells (for storage), and interconnections among these elements."
    },
    {
      "question": "Specifies the address in memory of the word to be written from or read into the memory address register. ___.",
      "options": [
        "MBR",
        "MAR",
        "IBR",
        "PC"
      ],
      "correct": 1,
      "explanation": "The Memory Address Register (MAR) holds the address of the memory location that is to be accessed (read from or written to)."
    },
    {
      "question": "______ manages the computer’s resources and orchestrates the performance of its functional parts.",
      "options": [
        "Data Movement",
        "Control",
        "Data processing",
        "Data storage"
      ],
      "correct": 1,
      "explanation": "The control unit (part of the CPU) is responsible for managing and coordinating all the components of the computer system, ensuring instructions are executed correctly and resources are utilized efficiently."
    },
    {
      "question": "Updating bank statement show operations involving ______.",
      "options": [
        "Data Movement",
        "Control",
        "Data processing",
        "Data storage"
      ],
      "correct": 2,
      "explanation": "Updating a bank statement involves performing calculations (e.g., adding deposits, subtracting withdrawals) on financial data, which falls under data processing."
    },
    {
      "question": "Embedded Systems have extreme resource constraints in terms of memory processor size, time, and ______.",
      "options": [
        "Power consumption",
        "Energy consumption",
        "speed",
        "cost"
      ],
      "correct": 0,
      "explanation": "Embedded systems are typically designed for specific functions and often operate in environments where power consumption is a critical factor, such as battery-powered devices."
    },
    {
      "question": "Transferring data from one peripheral or communications line to another is ______.",
      "options": [
        "Data Movement",
        "Control",
        "Data processing",
        "Data storage"
      ],
      "correct": 0,
      "explanation": "Moving data between different components of a computer system (e.g., from an input device to memory, or from memory to an output device) is referred to as data movement."
    },
    {
      "question": "______ consisting of a number of conducting wires to which all the other components attach.",
      "options": [
        "System bus",
        "memory",
        "CPU",
        "I/O"
      ],
      "correct": 0,
      "explanation": "A system bus is a set of parallel wires that provides a communication pathway between the CPU, memory, and input/output devices."
    },
    {
      "question": "If a system is 64-bit machine, then the length of each word will be ______.",
      "options": [
        "4 bytes",
        "8 bytes",
        "16 bytes",
        "32 bytes"
      ],
      "correct": 1,
      "explanation": "A 64-bit machine means its word size is 64 bits. Since 1 byte = 8 bits, 64 bits is equal to 64/8 = 8 bytes."
    },
    {
      "question": "The ______ processors are vulnerable to a new class of Denial of Service (DoS) attacks because the memory system is 'unfairly' shared among multiple cores.",
      "options": [
        "single-core",
        "multi-core",
        "super scalar",
        "dual core"
      ],
      "correct": 1,
      "explanation": "In multicore processors, if memory access is not managed fairly among cores, a malicious process on one core could monopolize memory access, leading to a denial-of-service for other cores."
    },
    {
      "question": "In most contemporary systems fixed-length sectors are used, with ______ bytes being the nearly universal sector size.",
      "options": [
        "512",
        "265",
        "128",
        "64"
      ],
      "correct": 0,
      "explanation": "512 bytes is the historical and still widely used standard sector size for hard disk drives and other storage devices."
    },
    {
      "question": "______ is example that apply orthogonal ISA.",
      "options": [
        "VAX",
        "ARM",
        "MIPS",
        "X86"
      ],
      "correct": 0,
      "explanation": "The VAX architecture is often cited as an example of an orthogonal instruction set architecture, where any addressing mode can be used with any instruction."
    },
    {
      "question": "SAN component interconnect device such as ______.",
      "options": [
        "Storage arrays",
        "switches",
        "management software",
        "cables"
      ],
      "correct": 1,
      "explanation": "Switches (e.g., Fibre Channel switches) are key interconnect devices in a SAN, allowing multiple servers to connect to multiple storage devices."
    },
    {
      "question": "A ______ expresses operations in a concise algebraic form using variables.",
      "options": [
        "high-level language",
        "opcode",
        "machine language",
        "register"
      ],
      "correct": 0,
      "explanation": "High-level programming languages (like Python, Java, C++) use syntax that is more abstract and closer to human language, allowing programmers to express operations using variables and algebraic forms."
    },
    {
      "question": "The ARM architecture only ______ instructions access memory locations.",
      "options": [
        "data processing",
        "status register access",
        "load and store",
        "branch"
      ],
      "correct": 2,
      "explanation": "ARM is a RISC architecture, adhering to the load/store principle where only explicit load and store instructions interact with memory. All other operations are performed on registers."
    },
    {
      "question": "NAS component Head unit is ______.",
      "options": [
        "CPU",
        "NIC",
        "Protocols",
        "SCSI"
      ],
      "correct": 1,
      "explanation": "The head unit of a Network Attached Storage (NAS) device typically includes a Network Interface Card (NIC) to connect to the network and serve files."
    },
    {
      "question": "______ multiple layers of memory between the processor and main memory.",
      "options": [
        "Cache Memory",
        "Controller",
        "RAM",
        "CPU"
      ],
      "correct": 0,
      "explanation": "Cache memory is organized in a hierarchy (L1, L2, L3) to provide faster access to frequently used data, bridging the speed gap between the processor and main memory."
    },
    {
      "question": "______ contains a word to be stored in memory or sent to the I/O unit.",
      "options": [
        "Memory buffer register",
        "Memory address register",
        "Instruction register",
        "Instruction buffer register"
      ],
      "correct": 0,
      "explanation": "The Memory Buffer Register (MBR), also known as the Memory Data Register (MDR), temporarily holds data being written to or read from memory."
    },
    {
      "question": "The decoded instruction is stored in ______.",
      "options": [
        "Register",
        "PC",
        "IR",
        "MDR"
      ],
      "correct": 2,
      "explanation": "After an instruction is fetched and decoded by the control unit, it is stored in the Instruction Register (IR) for execution."
    },
    {
      "question": "A higher level only needs to know about the interface to the lower level, not how the lower level is implemented refer to ______.",
      "options": [
        "ISA",
        "Microarchitecture",
        "Abstraction",
        "Purpose of computing"
      ],
      "correct": 2,
      "explanation": "Abstraction in computer science means hiding the complex details of how something works and exposing only the necessary interface, allowing different levels of a system to interact without needing to understand the full implementation of the lower level."
    },
    {
      "question": "Unexpected Slowdowns in Multi-core because ______.",
      "options": [
        "L2 cash",
        "L3 cash",
        "Dram controller",
        "Row buffer"
      ],
      "correct": 2,
      "explanation": "The DRAM controller plays a crucial role in managing memory access for multicore processors. Inefficient or unfair scheduling by the DRAM controller can lead to unexpected slowdowns and performance degradation for some cores."
    },
    {
      "question": "The DRAM controller reorders streams requests to the open row over other requests (even older ones) to ______ DRAM throughput.",
      "options": [
        "maximize",
        "minimize",
        "equalize",
        "optimization"
      ],
      "correct": 0,
      "explanation": "DRAM controllers often employ row buffer management techniques to maximize throughput by prioritizing access to currently open rows, reducing latency and improving overall memory performance."
    },
    {
      "question": "DRAM bank unavailable while refreshed refer to ______.",
      "options": [
        "Energy consumption",
        "Performance degradation",
        "QoS/impact",
        "DRAM capacity scaling"
      ],
      "correct": 1,
      "explanation": "DRAM memory requires periodic refreshing to maintain data. During refresh cycles, the DRAM bank is unavailable for reads or writes, which can lead to temporary performance degradation."
    },
    {
      "question": "In the case of, Zero-address instruction method the operands are stored in ______.",
      "options": [
        "Registers",
        "Accumulators",
        "Push down stack",
        "Cache"
      ],
      "correct": 2,
      "explanation": "Zero-address instruction sets operate on a stack. Operands are implicitly taken from the top of the stack, and results are pushed back onto the stack."
    },
    {
      "question": "The addressing mode, where you directly specify the operand value is ______.",
      "options": [
        "Immediate",
        "Direct",
        "Definite",
        "Relative"
      ],
      "correct": 0,
      "explanation": "Immediate addressing mode means the operand itself is included as part of the instruction, rather than an address where the operand can be found."
    },
    {
      "question": "Cache memory acts between ______ and ______.",
      "options": [
        "CPU and RAM",
        "RAM and ROM",
        "CPU and Hard Disk",
        "None of these"
      ],
      "correct": 0,
      "explanation": "Cache memory is positioned hierarchically between the fast CPU and the slower main RAM to reduce the average memory access time."
    },
    {
      "question": "The CISC stands for ______.",
      "options": [
        "Computer Instruction Set Compliment",
        "Complete Instruction Set Compliment",
        "Computer Indexed Set Components",
        "Complex Instruction Set Computer"
      ],
      "correct": 3,
      "explanation": "CISC stands for Complex Instruction Set Computer, characterized by a large and varied set of instructions, some of which can perform complex operations in a single instruction."
    },
    {
      "question": "The computer architecture aimed at reducing the time of execution of instructions is ______.",
      "options": [
        "CISC",
        "RISC",
        "ISA",
        "ANNA"
      ],
      "correct": 1,
      "explanation": "RISC (Reduced Instruction Set Computer) architectures aim for faster execution by using a smaller, simpler, and more optimized set of instructions, often executed in a single clock cycle."
    },
    {
      "question": "Both the CISC and RISC architectures have been developed to reduce the ______.",
      "options": [
        "Cost",
        "Time delay",
        "Semantic gap",
        "All of the mentioned"
      ],
      "correct": 2,
      "explanation": "The semantic gap refers to the difference in expressive power between high-level programming languages and the underlying machine language. Both CISC and RISC aim to bridge this gap, albeit through different approaches."
    },
    {
      "question": "In CISC architecture most of the complex instructions are stored in ______.",
      "options": [
        "Register",
        "Diodes",
        "CMOS",
        "Transistors"
      ],
      "correct": 3,
      "explanation": "The complex instructions in CISC architectures are implemented using microcode, which is typically stored in control memory within the CPU's control unit, composed of transistors."
    },
    {
      "question": "Which of the architecture is power efficient? ______.",
      "options": [
        "CISC",
        "RISC",
        "ISA",
        "IANA"
      ],
      "correct": 1,
      "explanation": "RISC architectures, with their simpler instruction sets, tend to be more power-efficient due to less complex hardware requirements and fewer transistors used in the CPU design."
    },
    {
      "question": "The throughput of a super scalar processor is ______.",
      "options": [
        "less than 1",
        "1",
        "more than 1",
        "not known"
      ],
      "correct": 2,
      "explanation": "A superscalar processor can execute more than one instruction per clock cycle by utilizing multiple execution units in parallel, thus having a throughput greater than 1."
    },
    {
      "question": "When the processor executes multiple instructions at a time is said to use ______.",
      "options": [
        "Single issue",
        "Multiplicity",
        "Visualization",
        "Multiple issues"
      ],
      "correct": 3,
      "explanation": "Multiple issue refers to the ability of a processor to fetch and execute multiple instructions simultaneously in a single clock cycle, a characteristic of superscalar and VLIW architectures."
    },
    {
      "question": "The ______ plays a very vital role in case of super scalar processors.",
      "options": [
        "Compilers",
        "Motherboard",
        "Memory",
        "Peripherals"
      ],
      "correct": 0,
      "explanation": "Compilers are crucial for superscalar processors as they optimize the instruction stream to identify independent instructions that can be executed in parallel, fully utilizing the multiple execution units."
    },
    {
      "question": "A stack organized computer has ______ address instruction.",
      "options": [
        "3",
        "2",
        "1",
        "0"
      ],
      "correct": 3,
      "explanation": "Stack-organized computers use zero-address instructions because operands are implicitly popped from the top of the stack, and results are implicitly pushed back onto the stack."
    },
    {
      "question": "The disk drive is connected to the system by using the ______.",
      "options": [
        "PCI bus",
        "SCSI bus",
        "HDMI",
        "ISA"
      ],
      "correct": 1,
      "explanation": "SCSI (Small Computer System Interface) is a standard for connecting and transferring data between computers and peripheral devices, including disk drives. While other buses exist, SCSI was widely used for this purpose."
    },
    {
      "question": "ARM stands for ______.",
      "options": [
        "Advanced Rate Machines",
        "Advanced RISC Machines",
        "Artificial Running Machines",
        "Aviary Running Machines"
      ],
      "correct": 1,
      "explanation": "ARM stands for Advanced RISC Machines, reflecting its origin as a RISC (Reduced Instruction Set Computer) architecture."
    },
    {
      "question": "The main importance of ARM micro-processors is providing operation with ______.",
      "options": [
        "Low cost and low power consumption",
        "Higher degree of multi-tasking",
        "Lower error or glitches",
        "Efficient memory management"
      ],
      "correct": 0,
      "explanation": "ARM processors are widely known for their efficiency, enabling low-cost and low-power consumption, which makes them ideal for mobile and embedded devices."
    },
    {
      "question": "ARM processors where basically designed for ______.",
      "options": [
        "Main frame systems",
        "Distributed systems",
        "Mobile systems",
        "Super computers"
      ],
      "correct": 2,
      "explanation": "ARM processors were initially designed for mobile and embedded systems, where power efficiency and compact size are crucial."
    },
    {
      "question": "In the ARM, PC is implemented using ______.",
      "options": [
        "Caches",
        "Heaps",
        "General purpose register",
        "Stack"
      ],
      "correct": 2,
      "explanation": "In ARM architecture, the Program Counter (PC) is typically one of the general-purpose registers (specifically R15), allowing for efficient manipulation and addressing."
    },
    {
      "question": "The instruction, ADD R1, R2, R3 is decoded as ______.",
      "options": [
        "R1<-[R1]+[R2]+[R3]",
        "R3<-[R1]+[R2]",
        "R3<-[R1]+[R2]+[R3]",
        "R1<-[R2]+[R3]"
      ],
      "correct": 3,
      "explanation": "In ARM assembly (and many other architectures), the `ADD` instruction typically takes three operands: destination register, first source register, and second source register. So, `ADD R1, R2, R3` means `R1 = R2 + R3`."
    },
    {
      "question": "______ converts the programs written in assembly language into machine instructions.",
      "options": [
        "Machine compiler",
        "Interpreter",
        "Assembler",
        "Converter"
      ],
      "correct": 2,
      "explanation": "An assembler is a program that translates assembly language code into machine code that a computer's processor can execute."
    },
    {
      "question": "The instructions like MOV or ADD are called as ______.",
      "options": [
        "OP-Code",
        "Operators",
        "Commands",
        "Operand"
      ],
      "correct": 0,
      "explanation": "MOV (move) and ADD (add) are examples of operation codes (opcodes), which specify the operation to be performed by the instruction."
    },
    {
      "question": "A source program is usually in ______.",
      "options": [
        "Assembly Language",
        "Machine Level Language",
        "High-level language",
        "Natural language"
      ],
      "correct": 2,
      "explanation": "Source programs are typically written by programmers in high-level languages, which are more human-readable and abstract than assembly or machine code."
    },
    {
      "question": "What is used to increase the apparent size of physical memory.",
      "options": [
        "Disks",
        "Hard-disk",
        "Virtual memory",
        "Secondary memory"
      ],
      "correct": 2,
      "explanation": "Virtual memory is a memory management technique that allows the operating system to compensate for physical memory shortages by temporarily transferring data from RAM to disk storage."
    },
    {
      "question": "During instruction execution, an instruction is read into an ______ in the processor.",
      "options": [
        "Memory buffer register (MBR)",
        "Address register (AD)",
        "Instruction register (IR)",
        "Index register (IR)"
      ],
      "correct": 2,
      "explanation": "After fetching, the instruction is loaded into the Instruction Register (IR) within the CPU for decoding and execution."
    },
    {
      "question": "Which computer program is used to convert whole program into the machine language at a time?",
      "options": [
        "Simulator",
        "Compiler",
        "Interpreter",
        "Commander"
      ],
      "correct": 1,
      "explanation": "A compiler translates an entire high-level source program into machine code before execution. An interpreter translates and executes line by line."
    },
    {
      "question": "The input devices use ______ to store the data received.",
      "options": [
        "Primary Memory",
        "Secondary Memory",
        "Buffer",
        "External Memory"
      ],
      "correct": 2,
      "explanation": "Input devices often use buffers (temporary storage areas) to hold data before it is processed or moved to main memory, to manage speed differences between the input device and the CPU."
    },
    {
      "question": "In RISC architecture, memory access is limited to instructions: ______.",
      "options": [
        "MOV and IMP",
        "ST and LD",
        "PUSH and POP",
        "CALL and RET"
      ],
      "correct": 1,
      "explanation": "In RISC, memory access is restricted to explicit load (LD) and store (ST) instructions. All other operations are performed on registers."
    },
    {
      "question": "Two processors A and B have clock frequencies of 700 Mhz and 900 Mhz respectively. Suppose A can execute an instruction with an average of 3 steps and B can execute with an average of 5 steps, For the execution of the same instruction which processor is faster?",
      "options": [
        "A",
        "B",
        "Both take the same time",
        "Insufficient information"
      ],
      "correct": 0,
      "explanation": "To determine which is faster, we need to calculate the time per instruction for each: Processor A: (1 / 700 MHz) * 3 steps = 3 / 700 microseconds ≈ 0.00428 microseconds. Processor B: (1 / 900 MHz) * 5 steps = 5 / 900 microseconds ≈ 0.00555 microseconds. Processor A takes less time per instruction, so A is faster."
    },
    {
      "question": "The ______ format is usually used to store data.",
      "options": [
        "BCD",
        "Decimal",
        "Hexadecimal",
        "Octal"
      ],
      "correct": 0,
      "explanation": "BCD (Binary-Coded Decimal) is a common format used to store decimal numbers in binary form, particularly in applications where precise decimal arithmetic is crucial."
    }
  ],
  
  "General 2": [
    {
      "question": "DRAM controllers commonly used scheduling policy (FR-FCFS).",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "DRAM controllers typically use the FR-FCFS (First-Ready, First-Come-First-Serve) scheduling policy to optimize memory access by prioritizing requests to already open rows."
    },
    {
      "question": "Processor Is the computer component that interprets and executes instructions.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "The processor (CPU) is the core component responsible for fetching, decoding, and executing instructions in a computer system."
    },
    {
      "question": "Alpha ISA contains a doubly linked list data type.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "The Alpha ISA (Instruction Set Architecture) does not natively include a doubly linked list data type; it provides basic instructions for data manipulation, but complex data structures are implemented in software."
    },
    {
      "question": "CPU interconnection is a mechanism that provides for communication among CPU, main memory, and I/O.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "CPU interconnection (e.g., buses or point-to-point links) enables communication between the CPU, memory, and I/O devices to transfer data and control signals."
    },
    {
      "question": "DRAM cells need to be refreshed because reading changes the voltage level of the capacitor in a cell and capacitors leak current.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "DRAM cells store data as charge in capacitors, which leak charge over time. Refreshing restores the charge to maintain data integrity."
    },
    {
      "question": "Two-level global branch prediction is microarchitecture.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Two-level branch prediction is a microarchitectural technique used in CPUs to improve the accuracy of branch prediction by tracking past branch behavior."
    },
    {
      "question": "DRAM controllers designed to minimize DRAM data throughput.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "DRAM controllers are designed to maximize throughput by reordering requests (e.g., FR-FCFS) to reduce latency and improve efficiency."
    },
    {
      "question": "Deeply Embedded Systems is not programmable once the program logic for the device has been burned into ROM.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Many deeply embedded systems use ROM or flash memory for firmware, making them non-programmable after deployment unless designed for updates."
    },
    {
      "question": "Program counter is advanced sequentially except for control transfer instructions.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "The program counter (PC) increments sequentially for linear execution but jumps to new addresses for branches, jumps, or interrupts."
    },
    {
      "question": "ISA change more slowly than microarchitecture.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Instruction Set Architecture (ISA) is typically stable for compatibility, while microarchitecture evolves faster to improve performance (e.g., pipelining, caching)."
    },
    {
      "question": "The type of memory assignment used in Intel processors is Little Endian.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Intel x86 processors use Little Endian byte order, where the least significant byte is stored at the lowest memory address."
    },
    {
      "question": "RAID 5 apply disk striping with dedicated parity driver.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "RAID 5 uses distributed parity across all disks, not a dedicated parity drive (which is RAID 3/4)."
    },
    {
      "question": "RAID level 1 does not over any redundancy at all.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "RAID 1 (mirroring) provides full redundancy by duplicating data on two or more disks."
    },
    {
      "question": "During the transfer of data between the processor and memory we use register.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Registers (e.g., MAR, MBR) temporarily hold data during transfers between CPU and memory."
    },
    {
      "question": "Memory and Registers are types of locations can hold source and destination operands.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Both memory addresses and registers can serve as operands in instructions (e.g., ADD [MEM], R1)."
    },
    {
      "question": "ARM ISA use Load/Store architecture addressing mode.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "ARM uses a Load/Store architecture where only load/store instructions access memory, while other instructions operate on registers."
    },
    {
      "question": "SAN allowing multiple clients to access files at the same time with very high performance.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Storage Area Networks (SANs) are designed for high-performance, concurrent access to block-level storage by multiple clients."
    },
    {
      "question": "Alpha ISA SCAN opcode operates on character strings; PUSH\\POP.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "The Alpha ISA doesn't have a SCAN opcode for string operations; PUSH/POP are stack operations unrelated to string scanning."
    },
    {
      "question": "Orthogonal ISA refer all addressing modes can be used with instruction types.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Orthogonal ISA means addressing modes can be used uniformly across different instruction types, providing programming flexibility."
    },
    {
      "question": "Potentially many instructions can execute at the same time in control flow order.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "In superscalar processors, multiple instructions can execute simultaneously while maintaining correct control flow."
    },
    {
      "question": "In dataflow order each instruction specifies 'who' should receive the result.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Dataflow architectures execute instructions based on operand availability, with results routed to dependent instructions."
    },
    {
      "question": "RAID levels 4 through 6 make use of a virtual access technique that allows separate I/O requests to be satisfied in parallel.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "RAID 4-6 use striping with parity, not virtual access. Parallel I/O is enabled by striping but limited by parity calculations."
    },
    {
      "question": "Programmer cannot access pipeline registers directly.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Pipeline registers are internal processor components used for instruction staging and are not architecturally visible to programmers."
    },
    {
      "question": "Interfaces between the computer and peripherals is an example of an organizational attribute.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "I/O interfaces are organizational attributes as they're hardware implementation details transparent to the ISA."
    },
    {
      "question": "Both the structure and functioning of a computer are, in essence, simple.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
    },
    {
      "question": "When data are moved over longer distances, to or from a remoted device, the process is known as data transport.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
    },
    {
      "question": "The SAN advantage is no distance limitation.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "SANs have practical distance limitations due to latency and protocol requirements, though technologies like FCIP can extend this."
    },
    {
      "question": "RAID provide fault tolerance for shared data and applications.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "RAID (except RAID 0) provides fault tolerance through redundancy, protecting against disk failures."
    },
    {
      "question": "Many transistors can be produces at the same time on a single wafer of silicon.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Semiconductor manufacturing creates multiple transistors simultaneously through photolithography processes on silicon wafers."
    },
    {
      "question": "Dedicated processor defined by the processor's ability to execute complex operating systems.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "Dedicated processors are specialized for specific tasks, often not running full OSes. General-purpose processors execute complex OSes."
    },
    {
      "question": "Deeply Embedded Systems use a microcontroller rather than a microprocessor.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Deeply embedded systems typically use microcontrollers (MCUs) that integrate CPU, memory, and I/O on a single chip."
    },
    {
      "question": "Internet download to disk is example of processing from/to storage.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "downloading from the Internet to disk is a data transfer operation, not a processing task."
    },
    {
      "question": "Updating bank statement is example of processing from storage to I/O.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "Updating a bank statement primarily involves processing stored data (storage to CPU), not necessarily I/O operations."
    },
    {
      "question": "Moore observed number of transistors that could be put on a single chip was doubling every year.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Moore's original 1965 observation stated transistor counts doubled annually (later revised to ~18-24 months)."
    },
    {
      "question": "The cost of computer logic and memory circuitry has fallen at a dramatic rate is the consequences of Moore's law.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Moore's Law drove cost reductions through scaling, making transistors cheaper and more numerous over time."
    },
    {
      "question": "Can evaluate a modern processor by performing hands-on RTL and C-level implementation.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Processor evaluation involves RTL (Register Transfer Level) design verification and performance modeling in C/HLS."
    },
    {
      "question": "A floating-point unit that uses wide floating-point values for additional accuracy is Microarchitecture.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "FPU design (e.g., 64-bit vs 128-bit) is a microarchitectural choice affecting precision and performance."
    },
    {
      "question": "Predicated instruction execution is ISA.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Predicated instruction execution is a feature defined at the Instruction Set Architecture (ISA) level to allow conditional execution without branching."
    },
    {
      "question": "A row-conflict memory access takes significantly longer than a row-hit access.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Row conflicts in DRAM require precharging and reactivating rows, adding ~30-40ns latency versus row hits (~15ns)."
    },
    {
      "question": "The ARM processors don't support Byte addressability.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "ARM processors support byte-addressable memory through load/store byte instructions (e.g., LDRB/STRB)."
    },
    {
      "question": "The disadvantage of non-uniform decode is restricts instruction format.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "n-uniform instruction decoding complicates hardware and pipeline design, but it doesn't inherently restrict instruction formats; rather, it often arises from complex, variable-length instruction formats (common in CISC architectures)."
    },
    {
      "question": "The RISC processor has a more complicated design than CISC.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "RISC designs are typically simpler due to uniform instructions, while CISC processors have complex decoders for variable-length instructions."
    },
    {
      "question": "Immediate addressing moves operand at address in A6 to data registers 5.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "Immediate addressing uses operand values embedded in instructions, not memory addresses (this describes direct addressing)."
    },
    {
      "question": "A modern 'super scalar' processor that can execute two or more instruction at once is consider a single core processor.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Superscalar refers to parallel execution within a single core. Multi-core means multiple CPUs on one chip."
    }
  ],

  "General 3": [
    {
      "question": "Both the structure and functioning of a computer are, in essence, simple.",
      "options": [
        "a) True",
        "b) False"
      ],
      "correct": 0,
    },
    {
      "question": "A computer must be able to process, store, move, and control data.",
      "options": [
        "a) True",
        "b) False"
      ],
      "correct": 0,
      "explanation": "These four functions (processing, storage, data movement, and control) are fundamental to all computer systems."
    },
    {
      "question": "Computer technology is changing at a ______ pace.",
      "options": [
        "A) Slow",
        "B) Slow to medium",
        "C) Rapid",
        "D) Non-existent"
      ],
      "correct": 2,
      "explanation": "Advancements in computing follow exponential trends like Moore's Law, making technological change extremely rapid."
    },
    {
      "question": "Computer ______ refers to those attributes that have a direct impact on the logical execution of a program.",
      "options": [
        "A) Organization",
        "B) Specifics",
        "C) Design",
        "D) Architecture"
      ],
      "correct": 3,
      "explanation": "Computer architecture defines the logical interface visible to programmers (e.g., instruction set, addressing modes)."
    },
    {
      "question": "Architectural attributes include ______.",
      "options": [
        "A) I/O mechanisms",
        "B) Control signals",
        "C) Interfaces",
        "D) Memory technology used"
      ],
      "correct": 0,
      "explanation": "Architectural attributes refer to features visible to the programmer, like I/O mechanisms, instruction sets, and addressing methods—not hardware implementation details."
    },
    {
      "question": "______ attributes include hardware details transparent to the programmer.",
      "options": [
        "A) Interface",
        "B) Organizational",
        "C) Memory",
        "D) Architectural"
      ],
      "correct": 1,
      "explanation": "Organizational attributes (e.g., pipeline depth, cache size) are hardware optimizations invisible to software."
    },
    {
      "question": "It is a(n) ______ design issue whether a computer will have a multiply instruction.",
      "options": [
        "A) Architectural",
        "B) Memory",
        "C) Elementary",
        "D) Organizational"
      ],
      "correct": 0,
      "explanation": "Including specific instructions (like multiply) is an architectural decision affecting the ISA."
    },
    {
      "question": "It is a(n) ______ issue whether the multiply instruction will be implemented by a special multiply unit or by a mechanism that makes repeated use of the add unit of the system.",
      "options": [
        "A) Architectural",
        "B) Memory",
        "C) Mechanical",
        "D) Organizational"
      ],
      "correct": 3,
      "explanation": "Implementation choices (e.g., dedicated multiplier vs. iterative addition) are organizational/hardware decisions."
    },
    {
      "question": "A ______ system is a set of interrelated subsystems.",
      "options": [
        "A) Secondary",
        "B) Hierarchical",
        "C) Complex",
        "D) Functional"
      ],
      "correct": 1,
      "explanation": "A hierarchical system is composed of interrelated subsystems arranged in a layered structure."
    },
    {
      "question": "An I/O device is referred to as a ______.",
      "options": [
        "A) CPU",
        "B) Control device",
        "C) Peripheral",
        "D) Register"
      ],
      "correct": 2,
      "explanation": "I/O devices (keyboards, printers, etc.) are peripherals that extend a computer's functionality."
    },
    {
      "question": "When data are moved over longer distances, to or from a remote device, the process is known as ______.",
      "options": [
        "A) Data communications",
        "B) Registering",
        "C) Structuring",
        "D) Data transport"
      ],
      "correct": 0,
      "explanation": "Data communications it specifically refers to the process of transmitting data over long distances between remote devices or systems."
    },
    {
      "question": "The ______ stores data.",
      "options": [
        "A) System bus",
        "B) I/O",
        "C) Main memory",
        "D) Control unit"
      ],
      "correct": 2,
      "explanation": "Main memory (RAM) is the primary volatile storage for data and instructions during execution."
    },
    {
      "question": "The ______ moves data between the computer and its external environment.",
      "options": [
        "A) Data transport",
        "B) I/O",
        "C) Register",
        "D) CPU interconnection"
      ],
      "correct": 1,
      "explanation": "I/O subsystems manage data exchange with external devices (disks, networks, etc.)."
    },
    {
      "question": "A common example of system interconnection is by means of a ______.",
      "options": [
        "A) Register",
        "B) System bus",
        "C) Data transport",
        "D) Control device"
      ],
      "correct": 1,
      "explanation": "Buses (e.g., PCIe, USB) interconnect CPU, memory, and I/O devices using shared electrical pathways."
    },
    {
      "question": "A ______ is a mechanism that provides for communication among CPU, main memory, and I/O.",
      "options": [
        "A) System interconnection",
        "B) CPU interconnection",
        "C) Peripheral",
        "D) Processor"
      ],
      "correct": 0,
      "explanation": "System interconnects (buses, networks) enable component communication across the entire computer."
    },
    {
      "question": "______ provide storage internal to the CPU.",
      "options": [
        "A) Control units",
        "B) ALUs",
        "C) Main memory",
        "D) Registers"
      ],
      "correct": 3,
      "explanation": "Registers are the fastest storage locations directly accessible by the CPU for temporary data."
    },
    {
      "question": "The ______ performs the computer's data processing functions.",
      "options": [
        "A) Register",
        "B) CPU interconnection",
        "C) ALU",
        "D) System bus"
      ],
      "correct": 2,
      "explanation": "The Arithmetic Logic Unit (ALU) executes mathematical and logical operations for data processing."
    },
    {
      "question": "The smallest entity of memory is called ______.",
      "options": [
        "a) Cell",
        "b) Block",
        "c) Instance",
        "d) Unit"
      ],
      "correct": 0,
      "explanation": "A memory cell stores one bit (0/1) and is the fundamental building block of memory hierarchies."
    },
    {
      "question": "When using the Big-Endian assignment to store a number, the sign bit of the number is stored in ______.",
      "options": [
        "a) The higher order byte of the word",
        "b) The lower order byte of the word",
        "c) Can’t say",
        "d) None of the mentioned"
      ],
      "correct": 0,
      "explanation": "Big-Endian stores the most significant byte (including sign bits) at the lowest memory address."
    },
    {
      "question": "The key factor/s in commercial success of a computer are ______.",
      "options": [
        "a) Performance",
        "b) Cost",
        "c) Speed",
        "d) Both Performance and Cost"
      ],
      "correct": 3,
      "explanation": "Market success balances performance (speed, capability) with cost-effectiveness."
    },
    {
      "question": "______ have been developed specifically for pipelined systems.",
      "options": [
        "a) Utility software",
        "b) Speed up utilities",
        "c) Optimizing compilers",
        "d) None of the mentioned"
      ],
      "correct": 2,
      "explanation": "Optimizing compilers rearrange code to minimize pipeline stalls (e.g., branch prediction, instruction scheduling)."
    },
    {
      "question": "The fetch and execution cycles are interleaved with the help of ______.",
      "options": [
        "a) Modification in processor architecture",
        "b) Clock",
        "c) Special unit",
        "d) Control unit"
      ],
      "correct": 1,
      "explanation": "The clock coordinates and interleaves the fetch and execution cycles by providing timing signals to synchronize operations."
    },
    {
      "question": "The pipelining process is also called as ______.",
      "options": [
        "a) Superscalar operation",
        "b) Assembly line operation",
        "c) Von Neumann cycle",
        "d) None of the mentioned"
      ],
      "correct": 1,
      "explanation": "Pipelining parallels factory assembly lines, where tasks are divided into sequential stages."
    },
    {
      "question": "Each stage in pipelining should be completed within ______ cycle.",
      "options": [
        "a) 1",
        "b) 2",
        "c) 3",
        "d) 4"
      ],
      "correct": 0,
      "explanation": "Ideal pipelines complete each stage in one clock cycle to maintain throughput."
    },
    {
      "question": "To increase the speed of memory access in pipelining, we make use of ______.",
      "options": [
        "a) Special memory locations",
        "b) Special purpose registers",
        "c) Cache",
        "d) Buffers"
      ],
      "correct": 2,
      "explanation": "Caches reduce memory latency by storing frequently accessed data close to the CPU."
    },
    {
      "question": "The Sun micro systems processors usually follow ______ architecture.",
      "options": [
        "a) CISC",
        "b) ISA",
        "c) ULTRA SPARC",
        "d) RISC"
      ],
      "correct": 3,
      "explanation": "Sun's SPARC processors use RISC (Reduced Instruction Set Computer) principles."
    },
    {
      "question": "Both the CISC and RISC architectures have been developed to reduce the ______.",
      "options": [
        "a) Cost",
        "b) Time delay",
        "c) Semantic gap",
        "d) All of the mentioned"
      ],
      "correct": 2,
      "explanation": "They aim to bridge the gap between high-level languages and machine instructions."
    },
    {
      "question": "Out of the following which is not a CISC machine.",
      "options": [
        "a) IBM 370/168",
        "b) VAX 11/780",
        "c) Intel 80486",
        "d) Motorola A567"
      ],
      "correct": 3,
      "explanation": "The Motorola A567 is a RISC processor, unlike the others which are CISC."
    },
    {
      "question": "Pipe-lining is a unique feature of ______.",
      "options": [
        "a) RISC",
        "b) CISC",
        "c) ISA",
        "d) IANA"
      ],
      "correct": 0,
      "explanation": "While pipelining exists in both, RISC's simpler instructions enable deeper pipelines."
    },
    {
      "question": "In CISC architecture most of the complex instructions are stored in ______.",
      "options": [
        "a) Register",
        "b) Diodes",
        "c) CMOS",
        "d) Transistors"
      ],
      "correct": 3,
      "explanation": "Complex instructions are hardwired into the processor's transistor logic."
    },
    {
      "question": "The collection of the above-mentioned entities where data is stored is called ______.",
      "options": [
        "a) Block",
        "b) Set",
        "c) Word",
        "d) Byte"
      ],
      "correct": 0,
      "explanation": "A block is a collection of data units transferred between memory and cache/storage as a single unit."
    },
    {
      "question": "An 24-bit address generates an address space of ______ locations.",
      "options": [
        "a) 1024",
        "b) 4096",
        "c) 248",
        "d) 16,777,216"
      ],
      "correct": 3,
      "explanation": "$$2^{24} = 16,777,216$$ unique addressable memory locations."
    },
    {
      "question": "If a system is 64-bit machine, then the length of each word will be ______.",
      "options": [
        "a) 4 bytes",
        "b) 8 bytes",
        "c) 16 bytes",
        "d) 12 bytes"
      ],
      "correct": 1,
      "explanation": "64 bits = 8 bytes (1 byte = 8 bits)."
    },
    {
      "question": "The type of memory assignment used in Intel processors is ______.",
      "options": [
        "a) Little Endian",
        "b) Big Endian",
        "c) Medium Endian",
        "d) None of the mentioned"
      ],
      "correct": 0,
      "explanation": "Intel x86/x64 uses Little Endian (LSB at lowest address)."
    },
    {
      "question": "To get the physical address from the logical address generated by CPU we use ______.",
      "options": [
        "a) MAR",
        "b) MMU",
        "c) Overlays",
        "d) TLB"
      ],
      "correct": 1,
      "explanation": "The Memory Management Unit (MMU) translates virtual/logical addresses to physical ones."
    },
    {
      "question": "______ method is used to map logical addresses of variable length onto physical memory.",
      "options": [
        "a) Paging",
        "b) Overlays",
        "c) Segmentation",
        "d) Paging with segmentation"
      ],
      "correct": 2,
      "explanation": "Segmentation supports variable-sized memory blocks, unlike fixed-size paging."
    },
    {
      "question": "During the transfer of data between the processor and memory we use ______.",
      "options": [
        "a) Cache",
        "b) TLB",
        "c) Buffers",
        "d) Registers"
      ],
      "correct": 3,
      "explanation": "Registers (e.g., MAR, MDR) hold data during CPU-memory transfers."
    },
    {
      "question": "Physical memory is divided into sets of finite size called as ______.",
      "options": [
        "a) Frames",
        "b) Pages",
        "c) Blocks",
        "d) Vectors"
      ],
      "correct": 0,
      "explanation": "Physical memory is partitioned into frames (typically 4KB each) for paging."
    },
    {
      "question": "The CISC stands for ______.",
      "options": [
        "a) Computer Instruction Set Compliment",
        "b) Complete Instruction Set Compliment",
        "c) Computer Indexed Set Components",
        "d) Complex Instruction set computer"
      ],
      "correct": 3,
      "explanation": "CISC architectures emphasize rich, multi-cycle instructions."
    },
    {
      "question": "The computer architecture aimed at reducing the time of execution of instructions is ______.",
      "options": [
        "a) CISC",
        "b) RISC",
        "c) ISA",
        "d) ANNA"
      ],
      "correct": 1,
      "explanation": "RISC achieves faster execution via simpler, single-cycle instructions."
    },
    {
      "question": "The RISC processor has a more complicated design than CISC.",
      "options": [
        "a) True",
        "b) False"
      ],
      "correct": 1,
      "explanation": "RISC designs are simpler due to uniform instructions and pipelining."
    },
    {
      "question": "The iconic feature of the RISC machine among the following is ______.",
      "options": [
        "a) Reduced number of addressing modes",
        "b) Increased memory size",
        "c) Having a branch delay slot",
        "d) All of the mentioned"
      ],
      "correct": 2,
      "explanation": "RISC simplifies addressing modes to streamline instruction execution."
    },
    {
      "question": "Which of the architecture is power efficient?",
      "options": [
        "a) CISC",
        "b) RISC",
        "c) ISA",
        "d) IANA"
      ],
      "correct": 1,
      "explanation": "RISC's simpler circuitry typically consumes less power than CISC."
    },
    {
      "question": "ARM stands for ______.",
      "options": [
        "a) Advanced Rate Machines",
        "b) Advanced RISC Machines",
        "c) Artificial Running Machines",
        "d) Aviary Running Machines"
      ],
      "correct": 1,
      "explanation": "ARM originally stood for Acorn RISC Machine, later rebranded."
    },
    {
      "question": "The main importance of ARM micro-processors is providing operation with ______.",
      "options": [
        "a) Low cost and low power consumption",
        "b) Higher degree of multi-tasking",
        "c) Lower error or glitches",
        "d) Efficient memory management"
      ],
      "correct": 0,
      "explanation": "ARM dominates mobile devices due to its energy efficiency and cost-effectiveness."
    },
    {
      "question": "ARM processors where basically designed for ______.",
      "options": [
        "a) Main frame systems",
        "b) Distributed systems",
        "c) Mobile systems",
        "d) Super computers"
      ],
      "correct": 2,
      "explanation": "ARM's low-power design targets embedded and mobile applications."
    },
    {
      "question": "The ARM processors don’t support Byte addressability.",
      "options": [
        "a) True",
        "b) False"
      ],
      "correct": 1,
      "explanation": "ARM supports byte-addressable memory via instructions like LDRB/STRB."
    },
    {
      "question": "The address space in ARM is ______.",
      "options": [
        "a) 224",
        "b) 264",
        "c) 216",
        "d) 232"
      ],
      "correct": 3,
      "explanation": "32-bit ARM architectures use 32-bit addressing (4GB address space)."
    },
    {
      "question": "The address system supported by ARM systems is/are ______.",
      "options": [
        "a) Little Endian",
        "b) Big Endian",
        "c) X-Little Endian",
        "d) Both Little & Big Endian"
      ],
      "correct": 3,
      "explanation": "ARM supports configurable endianness for compatibility."
    },
    {
      "question": "Memory can be accessed in ARM systems by ______ instructions.",
      "options": [
        "i) Store",
        "ii) MOVE",
        "iii) Load",
        "iv) arithmetic",
        "v) logical",
        "a) i, iii",
        "b) i, ii",
        "c) i, iv, v",
        "d) iii, iv, v"
      ],
      "correct": 0
    },
    {
      "question": "RISC stands for ______.",
      "options": [
        "a) Restricted Instruction Sequencing Computer",
        "b) Restricted Instruction Sequential Compiler",
        "c) Reduced Instruction Set Computer",
        "d) Reduced Induction Set Computer"
      ],
      "correct": 2,
      "explanation": "RISC simplifies instructions for faster, more efficient execution."
    },
    {
      "question": "In the ARM, PC is implemented using ______.",
      "options": [
        "a) Caches",
        "b) Heaps",
        "c) General purpose register",
        "d) Stack"
      ],
      "correct": 2,
      "explanation": "ARM's Program Counter (R15) is part of its register file."
    },
    {
      "question": "The additional duplicate register used in ARM machines are called as ______.",
      "options": [
        "a) Copied-registers",
        "b) Banked registers",
        "c) Extra registers",
        "d) External registers"
      ],
      "correct": 1,
      "explanation": "Banked registers switch context during interrupts/privilege changes."
    },
    {
      "question": "The banked registers are used for ______.",
      "options": [
        "a) Switching between supervisor and interrupt mode",
        "b) Extended storing",
        "c) Same as other general purpose registers",
        "d) None of the mentioned"
      ],
      "correct": 0,
      "explanation": "They enable fast context switching for exception handling."
    },
    {
      "question": "Each instruction in ARM machines is encoded into ______ Word.",
      "options": [
        "a) 2 byte",
        "b) 3 byte",
        "c) 4 byte",
        "d) 8 byte"
      ],
      "correct": 2,
      "explanation": "Classic ARM uses fixed-length 32-bit (4-byte) instructions."
    },
    {
      "question": "All instructions in ARM are conditionally executed.",
      "options": [
        "a) True",
        "b) False"
      ],
      "correct": 0,
      "explanation": "ARM instructions include conditional fields (e.g., ADDEQ) to skip execution."
    },
    {
      "question": "The addressing mode where the EA of the operand is the contents of Rn is ______.",
      "options": [
        "a) Pre-indexed mode",
        "b) Pre-indexed with write back mode",
        "c) Post-indexed mode",
        "d) None of the mentioned"
      ],
      "correct": 2
    },
    {
      "question": "The effective address of the instruction written in Post-indexed mode, MOVE[Rn]+Rm is ______.",
      "options": [
        "a) EA = [Rn]",
        "b) EA = [Rn + Rm]",
        "c) EA = [Rn] + Rm",
        "d) EA = [Rm] + Rn"
      ],
      "correct": 0,
      "explanation": "Post-indexing uses Rn's initial value, then updates Rn post-operation."
    },
    {
      "question": "The ______ format is usually used to store data.",
      "options": [
        "a) BCD",
        "b) Decimal",
        "c) Hexadecimal",
        "d) Octal"
      ],
      "correct": 0,
      "explanation": "Binary-Coded Decimal (BCD) preserves exact decimal values in storage."
    },
    {
      "question": "The 8-bit encoding format used to store data in a computer is ______.",
      "options": [
        "a) ASCII",
        "b) EBCDIC",
        "c) ANCI",
        "d) USCII"
      ],
      "correct": 1
    },
    {
      "question": "A source program is usually in ______.",
      "options": [
        "a) Assembly language",
        "b) Machine level language",
        "c) High-level language",
        "d) Natural language"
      ],
      "correct": 2,
      "explanation": "Source code is written in human-readable languages like C/Python."
    },
    {
      "question": "Which memory device is generally made of semiconductors?",
      "options": [
        "a) RAM",
        "b) Hard-disk",
        "c) Floppy disk",
        "d) Cd disk"
      ],
      "correct": 0,
      "explanation": "RAM uses semiconductor technology (transistors/capacitors), unlike magnetic/optical storage."
    },
    {
      "question": "The small extremely fast, RAM’s are called as ______.",
      "options": [
        "a) Cache",
        "b) Heaps",
        "c) Accumulators",
        "d) Stacks"
      ],
      "correct": 0,
      "explanation": "Caches are SRAM-based memories that bridge CPU-register speed gaps."
    },
    {
      "question": "The ALU makes use of ______ to store the intermediate results.",
      "options": [
        "a) Accumulators",
        "b) Registers",
        "c) Heap",
        "d) Stack"
      ],
      "correct": 0
    },
    {
      "question": "The control unit controls other units by generating ______.",
      "options": [
        "a) Control signals",
        "b) Timing signals",
        "c) Transfer signals",
        "d) Command Signals"
      ],
      "correct": 1
    },
    {
      "question": "______ are numbers and encoded characters, generally used as operands.",
      "options": [
        "a) Input",
        "b) Data",
        "c) Information",
        "d) Stored Values"
      ],
      "correct": 1,
      "explanation": "Data represents raw values processed by instructions."
    },
    {
      "question": "The Input devices can send information to the processor.",
      "options": [
        "a) When the SIN status flag is set",
        "b) When the data arrives regardless of the SIN flag",
        "c) Neither of the cases",
        "d) Either of the cases"
      ],
      "correct": 0,
      "explanation": "Input devices send data to the processor only when the SIN (Serial Input) status flag indicates data is ready."
    },
    {
      "question": "______ bus structure is usually used to connect I/O devices.",
      "options": [
        "a) Single bus",
        "b) Multiple bus",
        "c) Star bus",
        "d) Rambus"
      ],
      "correct": 0,
      "explanation": "A single bus structure is commonly used to connect I/O devices due to its simplicity and cost-effectiveness."
    },
    {
      "question": "The I/O interface required to connect the I/O device to the bus consists of ______.",
      "options": [
        "a) Address decoder and registers",
        "b) Control circuits",
        "c) Address decoder, registers and Control circuits",
        "d) Only Control circuits"
      ],
      "correct": 2,
      "explanation": "I/O interfaces need address decoding, data buffering (registers), and control logic."
    },
    {
      "question": "To reduce the memory access time, we generally make use of ______.",
      "options": [
        "a) Heaps",
        "b) Higher capacity RAM’s",
        "c) SDRAM’s",
        "d) Cache’s"
      ],
      "correct": 3,
      "explanation": "Caches store frequently accessed data to minimize slow main memory accesses."
    },
    {
      "question": "______ is generally used to increase the apparent size of physical memory.",
      "options": [
        "a) Secondary memory",
        "b) Virtual memory",
        "c) Hard-disk",
        "d) Disks"
      ],
      "correct": 1,
      "explanation": "Virtual memory uses disk space to extend addressable memory via paging."
    },
    {
      "question": "MFC stands for ______.",
      "options": [
        "a) Memory Format Caches",
        "b) Memory Function Complete",
        "c) Memory Find Command",
        "d) Mass Format Command"
      ],
      "correct": 1,
      "explanation": "MFC signals completion of memory operations in some architectures."
    },
    {
      "question": "The time delay between two successive initiations of memory operation ______.",
      "options": [
        "a) Memory access time",
        "b) Memory search time",
        "c) Memory cycle time",
        "d) Instruction delay"
      ],
      "correct": 2,
      "explanation": "Cycle time includes access time plus recovery/precharge delays."
    },
    {
      "question": "In pipelining the task which requires the least time is performed first.",
      "options": [
        "a) True",
        "b) False"
      ],
      "correct": 1,
      "explanation": "Pipelining processes tasks in fixed stages; speed variations cause stalls."
    },
    {
      "question": "If a unit completes its task before the allotted time period, then ______.",
      "options": [
        "a) It’ll perform some other task in the remaining time",
        "b) Its time gets reallocated to a different task",
        "c) It’ll remain idle for the remaining time",
        "d) None of the mentioned"
      ],
      "correct": 2,
      "explanation": "Pipeline stages synchronize to the slowest stage’s clock cycle."
    },
    {
      "question": "The periods of time when the unit is idle is called as ______.",
      "options": [
        "a) Stalls",
        "b) Bubbles",
        "c) Hazards",
        "d) Both Stalls and Bubbles"
      ],
      "correct": 3,
      "explanation": "Bubbles are pipeline stalls caused by hazards or delays."
    },
    {
      "question": "The contention for the usage of a hardware device is called ______.",
      "options": [
        "a) Structural hazard",
        "b) Stalk",
        "c) Deadlock",
        "d) None of the mentioned"
      ],
      "correct": 0,
      "explanation": "Structural hazards occur when hardware resources are oversubscribed."
    },
    {
      "question": "The situation wherein the data of operands are not available is called ______.",
      "options": [
        "a) Data hazard",
        "b) Stock",
        "c) Deadlock",
        "d) Structural hazard"
      ],
      "correct": 0,
      "explanation": "Data hazards arise from dependencies (e.g., RAW—Read After Write)."
    },
    {
      "question": "The decoded instruction is stored in ______.",
      "options": [
        "a) IR",
        "b) PC",
        "c) Registers",
        "d) MDR"
      ],
      "correct": 0,
      "explanation": "The Instruction Register (IR) holds decoded instructions for execution."
    },
    {
      "question": "The instruction -> Add LOCA, R0 does ______.",
      "options": [
        "a) Adds the value of LOCA to R0 and stores in the temp register",
        "b) Adds the value of R0 to the address of LOCA",
        "c) Adds the values of both LOCA and R0 and stores it in R0",
        "d) Adds the value of LOCA with a value in accumulator and stores it in R0"
      ],
      "correct": 2,
      "explanation": "This instruction typically means: $$R0 \leftarrow [R0] + [LOCA]$$ (register + memory)."
    },
    {
      "question": "Which registers can interact with the secondary storage?",
      "options": [
        "a) MAR",
        "b) PC",
        "c) IR",
        "d) R0"
      ],
      "correct": 0,
      "explanation": "The Memory Address Register (MAR) holds addresses for memory/disk access."
    },
    {
      "question": "During the execution of a program which gets initialized first?",
      "options": [
        "a) MDR",
        "b) IR",
        "c) PC",
        "d) MAR"
      ],
      "correct": 2,
      "explanation": "The Program Counter (PC) is initialized to the first instruction’s address."
    },
    {
      "question": "Which of the register/s of the processor is/are connected to Memory Bus?",
      "options": [
        "a) PC",
        "b) MAR",
        "c) IR",
        "d) Both PC and MAR"
      ],
      "correct": 1,
      "explanation": "The MAR interfaces directly with the memory bus for address transmission."
    },
    {
      "question": "ISP stands for ______.",
      "options": [
        "a) Instruction Set Processor",
        "b) Information Standard Processing",
        "c) Interchange Standard Protocol",
        "d) Interrupt Service Procedure"
      ],
      "correct": 0,
      "explanation": "ISP describes a processor’s instruction set architecture (ISA)."
    },
    {
      "question": "The internal components of the processor are connected by ______.",
      "options": [
        "a) Processor intra-connectivity circuitry",
        "b) Processor bus",
        "c) Memory bus",
        "d) Rambus"
      ],
      "correct": 1,
      "explanation": "Internal buses (e.g., ALU-register connections) enable component communication."
    },
    {
      "question": "______ is used to choose between incrementing the PC or performing ALU operations.",
      "options": [
        "a) Conditional codes",
        "b) Multiplexer",
        "c) Control unit",
        "d) None of the mentioned"
      ],
      "correct": 1,
      "explanation": "A multiplexer selects between incrementing the program counter (PC) or performing ALU operations based on control signals."
    },
    {
      "question": "The registers, ALU and the interconnection between them are collectively called as ______.",
      "options": [
        "a) process route",
        "b) information trail",
        "c) information path",
        "d) data path"
      ],
      "correct": 3,
      "explanation": "The datapath performs data processing and transfer operations."
    },
    {
      "question": "______ is used to store data in registers.",
      "options": [
        "a) D flip flop",
        "b) JK flip flop",
        "c) RS flip flop",
        "d) None of the mentioned"
      ],
      "correct": 0,
      "explanation": "D flip-flops are commonly used for register storage due to their stability."
    },
    {
      "question": "Which of the following is true about Computer Organization?",
      "options": [
        "i) It deals with high-level design issues.",
        "ii) It involves Logic (Instruction sets, Addressing modes, Data types, Cache optimization).",
        "iii) Computer Organization tells us how exactly all the units in the system are arranged and interconnected.",
        "iv) None of the Above"
      ],
      "correct": 2,
      "explanation": "Computer Organization focuses on hardware implementation and interconnections."
    },
    {
      "question": "The program written and before being compiled or assembled is called ______.",
      "options": [
        "A) Start Program",
        "B) Intermediate program",
        "C) Source Program",
        "D) Natural Program"
      ],
      "correct": 2,
      "explanation": "Source code is the human-readable program before compilation."
    },
    {
      "question": "The ______ is the computational center of the CPU.",
      "options": [
        "A) Registers",
        "B) ALU",
        "C) Flip-Flop",
        "D) Multiplexer"
      ],
      "correct": 1,
      "explanation": "The Arithmetic Logic Unit (ALU) performs all mathematical/logical operations."
    },
    {
      "question": "The input devices use ______ to store the data received.",
      "options": [
        "A) Primary Memory",
        "B) Secondary Memory",
        "C) Buffer",
        "D) External Memory"
      ],
      "correct": 2,
      "explanation": "Buffers temporarily hold input data before processing."
    },
    {
      "question": "The I/O devices are connected to the CPU via ______.",
      "options": [
        "A) SDRAM's",
        "B) Control circuits",
        "C) Signals",
        "D) BUS"
      ],
      "correct": 3,
      "explanation": "Buses (e.g., PCIe, USB) provide the physical pathways for I/O communication."
    },
    {
      "question": "An optimizing Compiler does ______.",
      "options": [
        "A) Better compilation of the given piece of code",
        "B) Takes advantage of the type of processor and reduces its process time",
        "C) Does better memory management",
        "D) All of the above"
      ],
      "correct": 3,
      "explanation": "An optimizing compiler improves code performance by enhancing compilation quality, processor-specific optimizations, and memory management.."
    },
    {
      "question": "Which bus is used to connect the monitor to the CPU?",
      "options": [
        "A) Single Bus",
        "B) SCSI Bus",
        "C) PCIe",
        "D) Rambus"
      ],
      "correct": 2
    },
    {
      "question": "In the ARM Architecture Only ______ Instructions Access Memory Locations.",
      "options": [
        "a) Branch",
        "b) Status Register Access",
        "c) Data Processing",
        "d) load and store"
      ],
      "correct": 3,
      "explanation": "ARM uses a load/store architecture where only LDR/STR access memory."
    }
  ]
};


const quizDataArabic = {
  'الفصل 1: مقدمة': [
    {
      question: "ما هو التمييز الرئيسي بين بنية الكمبيوتر وتنظيم الكمبيوتر؟",
      options: [
        "البنية تتعامل مع الأجهزة، التنظيم يتعامل مع البرامج",
        "البنية تشير إلى السمات المرئية للمبرمج، التنظيم يشير إلى كيفية تنفيذ الميزات",
        "البنية تتعلق بالأداء، التنظيم يتعلق بالتكلفة",
        "لا يوجد فرق بينهما"
      ],
      correct: 1,
      explanation: "تتضمن البنية مجموعة التعليمات، تمثيل البيانات، آليات الإدخال/الإخراج - ما هو مرئي للمبرمجين. يغطي التنظيم إشارات التحكم، الواجهات، تقنية الذاكرة - تفاصيل التنفيذ."
    },
    {
      question: "أي مما يلي ليس أحد وظائف الكمبيوتر الأربع الأساسية؟",
      options: [
        "معالجة البيانات",
        "تخزين البيانات",
        "تجميع البيانات",
        "نقل البيانات"
      ],
      correct: 2,
      explanation: "الوظائف الأساسية الأربع هي: معالجة البيانات، تخزين البيانات، نقل البيانات، والتحكم. تجميع البيانات هي عملية برمجية، وليست وظيفة حاسوب أساسية."
    },
    {
      question: "ماذا يحتوي سجل عداد البرنامج (PC)؟",
      options: [
        "التعليمات الحالية التي يتم تنفيذها",
        "عنوان زوج التعليمات التالي الذي سيتم جلبه",
        "نتيجة آخر عملية حسابية",
        "عنوان الذاكرة الذي يتم الوصول إليه"
      ],
      correct: 1,
      explanation: "يحتوي عداد البرنامج (PC) على عنوان زوج التعليمات التالي الذي سيتم جلبه من الذاكرة."
    },
    {
      question: "في نظام متعدد النواة، ما هو 'النواة'؟",
      options: [
        "شريحة وحدة المعالجة المركزية بأكملها",
        "وحدة معالجة فردية على شريحة المعالج",
        "ناقل النظام الذي يربط المكونات",
        "هيكل ذاكرة التخزين المؤقت"
      ],
      correct: 1,
      explanation: "النواة هي وحدة معالجة فردية على شريحة المعالج، والتي قد تكون مكافئة في الوظائف لوحدة المعالجة المركزية في نظام أحادي وحدة المعالجة المركزية."
    },
    {
      question: "ما هي العلاقة بين تردد الساعة ووقت دورة الساعة؟",
      options: [
        "هما نفس الشيء",
        "وقت دورة الساعة = تردد الساعة × 2",
        "وقت دورة الساعة = 1 / تردد الساعة",
        "لا توجد علاقة رياضية"
      ],
      correct: 2,
      explanation: "وقت دورة الساعة هو مقلوب تردد الساعة. على سبيل المثال، ساعة 800 ميجاهرتز لديها وقت دورة يبلغ 1.25 نانو ثانية."
    },
    {
      question: "أي مكون يدير موارد الكمبيوتر وينسق الأداء؟",
      options: [
        "وحدة المنطق والحساب (ALU)",
        "الذاكرة",
        "وحدة التحكم",
        "السجلات"
      ],
      correct: 2,
      explanation: "تقوم وحدة التحكم بإدارة موارد الكمبيوتر وتنسيق أداء أجزائه الوظيفية استجابةً للتعليمات."
    },
    {
      question: "ما هو الغرض الأساسي من ذاكرة التخزين المؤقت (Cache Memory)؟",
      options: [
        "لتخزين نظام التشغيل",
        "لعمل نسخة احتياطية من الذاكرة الرئيسية",
        "لتسريع الوصول إلى الذاكرة عن طريق تخزين البيانات التي من المرجح أن تستخدم",
        "للتحكم في عمليات الإدخال/الإخراج"
      ],
      correct: 2,
      explanation: "ذاكرة التخزين المؤقت أصغر وأسرع من الذاكرة الرئيسية، وتستخدم لتسريع الوصول إلى الذاكرة عن طريق وضع البيانات من الذاكرة الرئيسية التي من المرجح أن تستخدم في المستقبل القريب."
    },
    {
      question: "أي سجل يحتوي على تعليمة الرمز التشغيلي (opcode) ذات 8 بت التي يتم تنفيذها؟",
      options: [
        "عداد البرنامج (PC)",
        "سجل التعليمات (IR)",
        "سجل عنوان الذاكرة (MAR)",
        "المُجمِّع (AC)"
      ],
      correct: 1,
      explanation: "يحتوي سجل التعليمات (IR) على تعليمة الرمز التشغيلي (opcode) ذات 8 بت التي يتم تنفيذها."
    },
    {
      question: "ما هي وظيفة سجل عنوان الذاكرة (MAR)؟",
      options: [
        "يحتوي على التعليمات التي يتم تنفيذها",
        "يخزن البيانات المؤقتة لعمليات وحدة المنطق والحساب",
        "يحدد العنوان في الذاكرة للكلمة المراد كتابتها أو قراءتها",
        "يتحكم في تسلسل العمليات"
      ],
      correct: 2,
      explanation: "يحدد سجل عنوان الذاكرة (MAR) العنوان في الذاكرة للكلمة المراد كتابتها من أو قراءتها إلى سجل مخزن الذاكرة (MBR)."
    },
    {
      question: "في الأنظمة المضمنة، ما الذي يميز 'الأنظمة المضمنة بعمق'؟",
      options: [
        "إنها تشغل أنظمة تشغيل معقدة",
        "إنها قابلة للبرمجة بعد النشر",
        "إنها مخصصة لمهام محددة مع قيود شديدة على الموارد",
        "إنها تحتوي دائمًا على واجهات مستخدم"
      ],
      correct: 2,
      explanation: "الأنظمة المضمنة بعمق هي أجهزة مخصصة أحادية الغرض ذات قيود شديدة على الموارد من حيث الذاكرة، حجم المعالج، الوقت، واستهلاك الطاقة."
    },
    {
      question: "ما هي المكونات الهيكلية الأربعة الرئيسية للكمبيوتر؟",
      options: [
        "وحدة المعالجة المركزية، ذاكرة الوصول العشوائي، ذاكرة القراءة فقط، القرص الصلب",
        "وحدة المعالجة المركزية، الذاكرة الرئيسية، الإدخال/الإخراج، التوصيل البيني للنظام",
        "وحدة التحكم، وحدة المنطق والحساب، السجلات، ذاكرة التخزين المؤقت",
        "المعالج، الذاكرة، التخزين، الشبكة"
      ],
      correct: 1,
      explanation: "المكونات الهيكلية الأربعة الرئيسية هي: وحدة المعالجة المركزية (تتحكم في التشغيل ومعالجة البيانات)، الذاكرة الرئيسية (تخزن البيانات)، الإدخال/الإخراج (تنقل البيانات مع البيئة الخارجية)، والتوصيل البيني للنظام (آلية الاتصال)."
    },
    {
      question: "ما هو الفرق بين وقت الاستجابة والإنتاجية؟",
      options: [
        "هما نفس المقياس",
        "وقت الاستجابة هو السرعة، الإنتاجية هي الدقة",
        "وقت الاستجابة هو الوقت لمهمة واحدة، الإنتاجية هي المهام لكل وحدة زمنية",
        "وقت الاستجابة لوحدة المعالجة المركزية، الإنتاجية للذاكرة"
      ],
      correct: 2,
      explanation: "وقت الاستجابة هو الوقت بين بدء وإكمال مهمة، بينما الإنتاجية هي إجمالي كمية المهام المنجزة في فترة زمنية معينة. لا توجد علاقة عامة بين هذه المقاييس."
    },
    {
      question: "ماذا يحتوي سجل مخزن الذاكرة (MBR)؟",
      options: [
        "عنوان التعليمات التالية",
        "كلمة ستُخزن في الذاكرة أو تُستقبل من الذاكرة/الإدخال والإخراج",
        "التعليمات الحالية التي يتم فك تشفيرها",
        "إشارات التحكم لوحدة المنطق والحساب"
      ],
      correct: 1,
      explanation: "يحتوي سجل مخزن الذاكرة (MBR) على كلمة ستُخزن في الذاكرة أو تُرسل إلى وحدة الإدخال/الإخراج، أو يُستخدم لاستقبال كلمة من الذاكرة أو من وحدة الإدخال/الإخراج."
    },
    {
      question: "أي جيل من نشر إنترنت الأشياء (IoT) يتميز بمليارات الأجهزة المضمنة؟",
      options: [
        "تكنولوجيا المعلومات (IT)",
        "تكنولوجيا التشغيل (OT)",
        "التكنولوجيا الشخصية",
        "تكنولوجيا المستشعرات/المحركات"
      ],
      correct: 3,
      explanation: "الجيل الرابع، تكنولوجيا المستشعرات/المحركات، يُعتبر عادةً إنترنت الأشياء ويتميز باستخدام مليارات الأجهزة المضمنة باستخدام الاتصال اللاسلكي."
    },
    {
      question: "ما هي الوظيفة الأساسية لسجل مخزن التعليمات (IBR)؟",
      options: [
        "لتخزين قيمة عداد البرنامج",
        "للاحتفاظ مؤقتًا بالتعليمات اليمنى من الذاكرة",
        "لاحتواء عنوان البيانات في الذاكرة",
        "لتخزين نتيجة العمليات الحسابية"
      ],
      correct: 1,
      explanation: "يُستخدم سجل مخزن التعليمات (IBR) للاحتفاظ مؤقتًا بالتعليمات اليمنى من كلمة في الذاكرة."
    },
    {
      question: "في سياق نقل البيانات، ما الذي يميز الإدخال/الإخراج عن اتصالات البيانات؟",
      options: [
        "سرعة نقل البيانات",
        "نوع البيانات التي يتم نقلها",
        "المسافة - الإدخال/الإخراج اتصال مباشر، اتصالات البيانات عبر مسافات أطول",
        "متطلبات الأمان"
      ],
      correct: 2,
      explanation: "يحدث الإدخال/الإخراج عندما يتم استقبال البيانات من أو تسليمها إلى جهاز متصل مباشرة بالكمبيوتر، بينما تتضمن اتصالات البيانات نقل البيانات عبر مسافات أطول إلى أو من أجهزة بعيدة."
    },
    {
      question: "ما هو الفرق الرئيسي بين معالجات التطبيقات والمعالجات المخصصة في الأنظمة المضمنة؟",
      options: [
        "مستويات استهلاك الطاقة",
        "تكلفة التصنيع",
        "معالجات التطبيقات تنفذ أنظمة تشغيل معقدة، المعالجات المخصصة تخدم مهام محددة",
        "اختلافات الحجم المادي"
      ],
      correct: 2,
      explanation: "تُعرف معالجات التطبيقات بقدرتها على تنفيذ أنظمة تشغيل معقدة وهي ذات غرض عام، بينما المعالجات المخصصة مخصصة لمهمة واحدة أو عدد قليل من المهام المحددة."
    },
    {
      question: "أي المكونات توفر الوظائف الأساسية الأربعة للدوائر المتكاملة؟",
      options: [
        "الترانزستورات، المقاومات، المكثفات، المحاثات",
        "البوابات (المعالجة)، خلايا الذاكرة (التخزين)، المسارات (الحركة)، إشارات التحكم (التحكم)",
        "وحدة المعالجة المركزية، الذاكرة، الإدخال/الإخراج، التوصيل البيني",
        "الأجهزة، البرامج، البرامج الثابتة، البرمجيات الوسيطة"
      ],
      correct: 1,
      explanation: "في الدوائر المتكاملة: توفر البوابات معالجة البيانات، توفر خلايا الذاكرة تخزين البيانات، توفر المسارات نقل البيانات، وتوفر إشارات التحكم وظائف التحكم."
    },
    {
      question: "ما هي الميزة التي تظهرها عائلات Intel x86 و IBM System/370؟",
      options: [
        "أداء أعلى من المنافسين",
        "تكاليف تصنيع أقل",
        "توافق الكود من خلال بنية أساسية مشتركة",
        "كفاءة أفضل في استهلاك الطاقة"
      ],
      correct: 2,
      explanation: "تتشارك جميع عائلات Intel x86 و IBM System/370 نفس البنية الأساسية، مما يوفر توافق الكود (على الأقل رجوعًا)، حتى لو اختلف التنظيم بين الإصدارات."
    },
    {
      question: "في الأنظمة المضمنة بعمق، ما نوع المعالج الذي يستخدم عادةً؟",
      options: [
        "المعالج الدقيق (Microprocessor)",
        "المتحكم الدقيق (Microcontroller)",
        "معالج الرسوميات",
        "معالج الإشارة الرقمية"
      ],
      correct: 1,
      explanation: "تستخدم الأنظمة المضمنة بعمق متحكمًا دقيقًا بدلاً من معالج دقيق، وهي غير قابلة للبرمجة بمجرد حرق منطق البرنامج في ذاكرة القراءة فقط، وليس لديها تفاعل مع المستخدم."
    },
    {
      question: "ما هي المكونات الهيكلية الرئيسية لوحدة المعالجة المركزية؟",
      options: [
        "ذاكرة التخزين المؤقت، السجلات، الناقل، الساعة",
        "وحدة التحكم، وحدة المنطق والحساب، السجلات، التوصيل البيني لوحدة المعالجة المركزية",
        "وحدة الجلب، وحدة فك التشفير، وحدة التنفيذ، وحدة الكتابة الخلفية",
        "ذاكرة التخزين المؤقت L1، ذاكرة التخزين المؤقت L2، ذاكرة التخزين المؤقت L3، واجهة الذاكرة الرئيسية"
      ],
      correct: 1,
      explanation: "المكونات الهيكلية الرئيسية لوحدة المعالجة المركزية هي: وحدة التحكم (تتحكم في تشغيل وحدة المعالجة المركزية)، وحدة المنطق والحساب (تنفذ معالجة البيانات)، السجلات (توفر تخزينًا داخليًا)، والتوصيل البيني لوحدة المعالجة المركزية (يوفر الاتصال بين المكونات)."
    },
    {
      question: "ما الذي يميز تفاعل الأنظمة المضمنة مع بيئتها؟",
      options: [
        "إنها تعمل بشكل مستقل عن العوامل الخارجية",
        "إنها مرتبطة ارتباطًا وثيقًا بقيود الوقت الفعلي",
        "إنها تعالج فقط البيانات المخزنة",
        "إنها تتواصل فقط عبر واجهات الشبكة"
      ],
      correct: 1,
      explanation: "غالبًا ما ترتبط الأنظمة المضمنة ارتباطًا وثيقًا ببيئتها، مما يؤدي إلى قيود الوقت الفعلي التي تفرضها الحاجة إلى التفاعل مع البيئة، مثل السرعات المطلوبة والدقة والتوقيت."
    }
  ],
  'الفصل 2: بيئة التخزين و RAID': [
    {
      question: "ما هو الفرق الرئيسي بين وحدات الذاكرة وأجهزة التخزين؟",
      options: [
        "وحدات الذاكرة أرخص من أجهزة التخزين",
        "تستخدم وحدات الذاكرة شرائح أشباه الموصلات بينما تستخدم أجهزة التخزين وسائط مغناطيسية أو بصرية",
        "أجهزة التخزين أسرع من وحدات الذاكرة",
        "وحدات الذاكرة غير متطايرة بينما أجهزة التخزين متطايرة"
      ],
      correct: 1,
      explanation: "يتم تنفيذ وحدات الذاكرة باستخدام شرائح أشباه الموصلات، بينما تستخدم أجهزة التخزين وسائط مغناطيسية أو بصرية. كما أن وحدات الذاكرة تتيح الوصول إلى البيانات بسرعة أعلى من وسائط التخزين."
    },
    {
      question: "أي نوع من الذاكرة متطاير ويتطلب إمدادًا مستمرًا بالطاقة؟",
      options: [
        "ذاكرة القراءة فقط (ROM)",
        "ذاكرة الوصول العشوائي (RAM)",
        "تخزين القرص الصلب",
        "تخزين القرص المضغوط (CD-ROM)"
      ],
      correct: 1,
      explanation: "ذاكرة الوصول العشوائي (RAM) متطايرة وتتطلب إمدادًا مستمرًا بالطاقة للحفاظ على محتوى خلايا الذاكرة. يتم مسح البيانات عند إيقاف تشغيل طاقة النظام أو انقطاعها."
    },
    {
      question: "ماذا تعني DAS وكيف تتصل بالخوادم؟",
      options: [
        "Direct Access Storage - تتصل عبر بروتوكولات الشبكة",
        "Distributed Array Storage - تتصل عبر كابلات الألياف البصرية",
        "Direct Attached Storage - تتصل مباشرة عبر محول ناقل المضيف (HBA)",
        "Dynamic Allocation Storage - تتصل عبر USB فقط"
      ],
      correct: 2,
      explanation: "DAS تعني Direct Attached Storage. تتصل مباشرة بخادم عبر محول ناقل المضيف (HBA)، بدون وجود شبكة بين التخزين وخوادم الاستضافة."
    },
    {
      question: "ما هي الميزة الرئيسية لـ DAS على بيئات التخزين الأخرى؟",
      options: [
        "إمكانية الوصول من أجهزة متعددة",
        "أداء سريع وإعداد بسيط",
        "قدرات مشاركة الشبكة",
        "أقل تكلفة بين جميع options"
      ],
      correct: 1,
      explanation: "توفر DAS أداءً سريعًا وخيارات سعة عالية وإعدادًا بسيطًا كمزاياها الرئيسية."
    },
    {
      question: "ما هو العيب الأساسي لـ DAS؟",
      options: [
        "أداء بطيء",
        "تكلفة عالية",
        "غير قابل للوصول من أجهزة أخرى وعرضة لفقدان البيانات إذا تعطل الكمبيوتر المتصل",
        "متطلبات إعداد معقدة"
      ],
      correct: 2,
      explanation: "DAS غير قابل للوصول من أجهزة أخرى وعرضة لفقدان البيانات إذا تعطل الكمبيوتر المتصل."
    },
    {
      question: "ماذا تعني SAN وما هي خاصيتها الأساسية؟",
      options: [
        "Storage Access Network - حل تخزين لاسلكي",
        "System Area Network - يربط الخوادم فقط",
        "Storage Area Networks - شبكة تخزين بيانات مخصصة يمكن الوصول إليها بواسطة خوادم متعددة",
        "Secure Access Network - يوفر تخزينًا مشفرًا"
      ],
      correct: 2,
      explanation: "SAN تعني Storage Area Networks. إنها شبكة تخزين بيانات مخصصة يمكن الوصول إليها بواسطة خوادم متعددة."
    },
    {
      question: "أي بيئة تخزين توفر أسرع أداء؟",
      options: [
        "DAS",
        "SAN",
        "NAS",
        "RAID"
      ],
      correct: 1,
      explanation: "توفر SAN أسرع أداء بين options نظرًا لشبكتها المخصصة المصممة خصيصًا لاتصالات عالية الأداء."
    },
    {
      question: "ما هي البروتوكولات الرئيسية المستخدمة في SAN؟",
      options: [
        "TCP/IP و HTTP",
        "SCSI و SATA",
        "USB و FireWire",
        "Ethernet و WiFi"
      ],
      correct: 1,
      explanation: "البروتوكولات المستخدمة في SAN هي SCSI و SATA."
    },
    {
      question: "ما هي نقطة الضعف الرئيسية في SAN المذكورة في الوثيقة؟",
      options: [
        "السرعة وزمن الوصول",
        "الأمان",
        "التكلفة",
        "التعقيد"
      ],
      correct: 1,
      explanation: "وفقًا للوثيقة، ضعف SAN هو الأمان، بينما السرعة وزمن الوصول مدرجة كعيوب."
    },
    {
      question: "ماذا تعني NAS وعلى أي مستوى تعمل؟",
      options: [
        "Network Access Storage - تعمل على مستوى الكتل",
        "Network Attached Storage - تعمل على مستوى الملفات",
        "Network Array Storage - تعمل على مستوى البتات",
        "Network Administration Storage - تعمل على مستوى النظام"
      ],
      correct: 1,
      explanation: "NAS تعني Network Attached Storage. إنها تخزين بيانات كمبيوتر على مستوى الملفات يتصل بأجهزة أخرى على شبكة TCP/IP."
    },
    {
      question: "أي مكون ليس جزءًا من بنية NAS؟",
      options: [
        "وحدة الرأس (وحدة المعالجة المركزية، الذاكرة)",
        "بطاقة واجهة الشبكة (NIC)",
        "محول ناقل المضيف (HBA)",
        "نظام تشغيل محسن"
      ],
      correct: 2,
      explanation: "محول ناقل المضيف (HBA) هو مكون من DAS، وليس NAS. تتضمن مكونات NAS وحدة الرأس، بطاقة واجهة الشبكة، نظام تشغيل محسن، بروتوكولات، وبروتوكولات التخزين."
    },
    {
      question: "ماذا تعني RAID؟",
      options: [
        "مجموعة عشوائية من الأقراص المستقلة",
        "مجموعة زائدة من الأقراص المستقلة",
        "مجموعة موثوقة من الأقراص المتكاملة",
        "وصول سريع للأقراص الداخلية"
      ],
      correct: 1,
      explanation: "RAID تعني Redundant Array of Independent Disks (مجموعة زائدة من الأقراص المستقلة)."
    },
    {
      question: "أي وظيفة RAID تكتب كتلًا منطقية متتالية على أقراص فعلية متتالية؟",
      options: [
        "النسخ المتطابق (Mirroring)",
        "التقسيم (Striping)",
        "حساب التكافؤ (Parity Calculation)",
        "المزامنة (Synchronization)"
      ],
      correct: 1,
      explanation: "التقسيم (Striping) يكتب بايتات/كتل منطقية متتالية على أقراص فعلية متتالية."
    },
    {
      question: "أي مستوى RAID يوفر التقسيم بدون تكافؤ أو تكرار؟",
      options: [
        "RAID 1",
        "RAID 0",
        "RAID 5",
        "RAID 10"
      ],
      correct: 1,
      explanation: "RAID 0 يوفر التقسيم بدون تكافؤ، مما يوفر أداءً ممتازًا ولكن بدون تكرار."
    },
    {
      question: "ما هو الحد الأدنى لعدد الأقراص المطلوبة لـ RAID 1؟",
      options: [
        "قرص واحد",
        "قرصان",
        "3 أقراص",
        "4 أقراص"
      ],
      correct: 1,
      explanation: "يتطلب RAID 1 قرصين على الأقل ويوفر تكرارًا ممتازًا حيث يتم نسخ الكتل."
    },
    {
      question: "أي مستوى RAID يوصف بأنه 'شريط من المرايا'؟",
      options: [
        "RAID 0+1",
        "RAID 5",
        "RAID 10",
        "RAID 6"
      ],
      correct: 2,
      explanation: "يُسمى RAID 10 أيضًا 'شريط من المرايا' ويتطلب قرصين على الأقل."
    },
    {
      question: "ما هو الحد الأدنى لعدد الأقراص المطلوبة لـ RAID 5؟",
      options: [
        "قرصان",
        "3 أقراص",
        "4 أقراص",
        "5 أقراص"
      ],
      correct: 1,
      explanation: "يتطلب RAID 5 ثلاثة أقراص على الأقل ويوفر أداءً جيدًا مع تكافؤ موزع."
    },
    {
      question: "أي مستوى RAID يستخدم تقسيمًا على مستوى البايت؟",
      options: [
        "RAID 3",
        "RAID 4",
        "RAID 5",
        "RAID 6"
      ],
      correct: 0,
      explanation: "RAID 3 يستخدم تقسيمًا على مستوى البايت، بينما RAID 4 يستخدم تقسيمًا على مستوى الكتل."
    },
    {
      question: "ما الذي يميز RAID 6 عن RAID 5؟",
      options: [
        "يستخدم التقسيم بدلاً من النسخ المتطابق",
        "يحتوي على كتل تكافؤ مزدوجة ويتطلب 6 أقراص",
        "يوفر أداءً أفضل",
        "يستخدم عددًا أقل من الأقراص"
      ],
      correct: 1,
      explanation: "RAID 6 مشابه لـ RAID 5 باستثناء أنه يحتوي على كتل تكافؤ مزدوجة ويتطلب 6 أقراص."
    },
    {
      question: "أي مستوى RAID موصى به لقواعد البيانات الموجهة للقراءة بكثافة؟",
      options: [
        "RAID 0",
        "RAID 1",
        "RAID 5",
        "RAID 10"
      ],
      correct: 2,
      explanation: "RAID 5 هو الخيار الأفضل من حيث التكلفة الذي يوفر الأداء والتكرار، ويوصى به لقواعد البيانات الموجهة للقراءة بكثافة، على الرغم من أن عمليات الكتابة ستكون بطيئة."
    },
    {
      question: "أي مستوى RAID يعتبر الخيار الأفضل للتطبيقات ذات الأهمية القصوى؟",
      options: [
        "RAID 0",
        "RAID 5",
        "RAID 6",
        "RAID 10"
      ],
      correct: 3,
      explanation: "يوفر RAID 10 تكرارًا ممتازًا وأداءً ممتازًا. إذا كنت تستطيع تحمل التكلفة، فهذا هو الخيار الأفضل لأي تطبيقات ذات أهمية قصوى، خاصة قواعد البيانات."
    },
    {
      question: "أي بيئة تخزين ستكون الأفضل لمستخدم واحد يخزن ملفات شخصية؟",
      options: [
        "DAS",
        "SAN",
        "NAS",
        "RAID"
      ],
      correct: 0,
      explanation: "DAS هو الأفضل لمحطات العمل الفردية وتخزين البيانات الشخصية نظرًا لأدائه السريع وإعداداته البسيطة."
    },
    {
      question: "أي بيئة تخزين هي الأنسب للشركات الصغيرة التي لديها عدة موظفين يشاركون الملفات؟",
      options: [
        "DAS",
        "SAN",
        "NAS",
        "RAID"
      ],
      correct: 2,
      explanation: "NAS هو الأفضل للشركات الصغيرة ومجموعات العمل لأنه يوفر تخزينًا مشتركًا يمكن الوصول إليه من أجهزة متعددة على الشبكة."
    },
    {
      question: "أي بيئة تخزين تتطلب أكبر قدر من الخبرة التقنية لإدارتها؟",
      options: [
        "DAS",
        "SAN",
        "NAS",
        "RAID"
      ],
      correct: 1,
      explanation: "تتطلب SAN خبرة تقنية كبيرة لإدارتها نظرًا لأجهزتها المتخصصة وتكوينها المعقد."
    },
    {
      question: "من حيث ترتيب التكلفة من الأقل إلى الأعلى، ما هو الترتيب correct؟",
      options: [
        "SAN, NAS, DAS",
        "DAS, NAS, SAN",
        "NAS, DAS, SAN",
        "DAS, SAN, NAS"
      ],
      correct: 1,
      explanation: "DAS هو الأرخص بشكل عام، يليه NAS، ثم SAN هو الأغلى نظرًا لأجهزته المتخصصة وتكوينه."
    },
    {
      question: "أي عبارة عن RAID صحيحة؟",
      options: [
        "RAID يضمن حماية كاملة للبيانات ضد أي فشل",
        "جميع مستويات RAID توفر نفس مستوى الأداء والتكرار",
        "يمكن تنفيذ RAID على كل من أنظمة DAS و NAS",
        "استخدام RAID يلغي الحاجة إلى النسخ الاحتياطي"
      ],
      correct: 2,
      explanation: "يمكن تنفيذ RAID على كل من أنظمة DAS و NAS للحصول على فوائد إضافية. لا يضمن RAID حماية كاملة، وتختلف المستويات في الأداء/التكرار، ولا يزال هناك حاجة للنسخ الاحتياطي."
    },
    {
      question: "ما نوع الوصول إلى البيانات الذي توفره SAN؟",
      options: [
        "وصول البيانات على مستوى الملفات",
        "تخزين البيانات على مستوى الكتل",
        "وصول البيانات على مستوى البايت",
        "وصول البيانات على مستوى التطبيق"
      ],
      correct: 1,
      explanation: "توفر SAN تخزين البيانات على مستوى الكتل، مما يسمح لعدة عملاء بالوصول إلى الملفات في نفس الوقت بأداء عالٍ جدًا."
    },
    {
      question: "أي فائدة ليست مرتبطة بـ NAS؟",
      options: [
        "غير مكلفة نسبيًا",
        "توفر البيانات على مدار الساعة طوال أيام الأسبوع وعن بعد",
        "أسرع أداء بين خيارات التخزين",
        "النسخ الاحتياطي التلقائي إلى أجهزة أخرى والسحابة"
      ],
      correct: 2,
      explanation: "أداء NAS أبطأ مقارنة بـ DAS بسبب الحمل الزائد للشبكة. أسرع أداء توفره SAN."
    },
    {
      question: "ماذا يحدث لبيانات RAM عند انقطاع الطاقة؟",
      options: [
        "يتم نسخ البيانات احتياطيًا تلقائيًا",
        "تبقى البيانات سليمة",
        "يتم مسح البيانات",
        "يتم نقل البيانات إلى ROM"
      ],
      correct: 2,
      explanation: "ذاكرة الوصول العشوائي (RAM) متطايرة وتتطلب إمدادًا مستمرًا بالطاقة. يتم مسح البيانات عند إيقاف تشغيل طاقة النظام أو انقطاعها."
    },
    {
      question: "أي مستوى RAID يجب ألا يستخدم للأنظمة الحيوية؟",
      options: [
        "RAID 0",
        "RAID 1",
        "RAID 5",
        "RAID 10"
      ],
      correct: 0,
      explanation: "RAID 0 لا يحتوي على تكرار (لا يوجد نسخة متطابقة، لا يوجد تكافؤ)، لذلك لا ينبغي استخدامه لأي نظام حيوي على الرغم من أدائه الممتاز."
    }
  ],
  'الفصل 3: مقدمة وهياكل الكمبيوتر الأساسية': [
    {
      question: "ما هو الغرض الأساسي من الحوسبة وفقًا لريتشارد هامينغ؟",
      options: [
        "توليد الأرقام والبيانات",
        "توفير الرؤية، وليس مجرد أرقام",
        "تنفيذ التعليمات بكفاءة",
        "حل المعادلات الرياضية"
      ],
      correct: 1,
      explanation: "وفقًا لريتشارد هامينغ، 'الغرض من الحوسبة هو الرؤية، وليس الأرقام.' القيمة الحقيقية للحوسبة تكمن في استخدام البيانات لاكتساب الفهم والمعرفة (الرؤية)."
    },
    {
      question: "أي مستوى تحويل يقع مباشرة فوق المنطق في التسلسل الهرمي؟",
      options: [
        "الدوائر",
        "البنية الدقيقة",
        "ISA (البنية)",
        "نظام وقت التشغيل"
      ],
      correct: 1,
      explanation: "في مستويات التسلسل الهرمي للتحويل، تقع البنية الدقيقة مباشرة فوق المنطق، والذي يقع فوق الدوائر."
    },
    {
      question: "ما هو التجريد في سياق أنظمة الكمبيوتر؟",
      options: [
        "طريقة لإخفاء تفاصيل التنفيذ عن المستخدمين",
        "مستوى أعلى يحتاج فقط إلى معرفة الواجهة للمستوى الأدنى، وليس كيفية تنفيذها",
        "طريقة لجعل البرامج تعمل بشكل أسرع",
        "تقنية لتحسين تصميم الأجهزة"
      ],
      correct: 1,
      explanation: "يعني التجريد أن المستوى الأعلى يحتاج فقط إلى معرفة الواجهة للمستوى الأدنى، وليس كيفية تنفيذ المستوى الأدنى."
    },
    {
      question: "لماذا قد تحتاج إلى فهم ما يحدث في مستويات التجريد الأساسية؟",
      options: [
        "لأغراض أكاديمية فقط",
        "عندما تعمل البرامج ببطء، تستهلك الكثير من الطاقة، أو لا تعمل بشكل صحيح",
        "لإبهار الزملاء بالمعرفة التقنية",
        "ليس ضروريًا أبدًا في الحوسبة الحديثة"
      ],
      correct: 1,
      explanation: "تحتاج إلى فهم المستويات الأساسية عندما تعمل البرامج ببطء، تستهلك الكثير من الطاقة، لا تعمل بشكل صحيح، أو عند تصميم أنظمة أكثر كفاءة."
    },
    {
      question: "ما هما الهدفان الرئيسيان لدورة هندسة الكمبيوتر المذكورة؟",
      options: [
        "تعلم البرمجة وتصميم الأجهزة",
        "فهم المكونات الداخلية للمعالج واتخاذ قرارات تحسين عبر الطبقات",
        "إتقان لغة التجميع والمنطق الرقمي",
        "دراسة الخوارزميات وهياكل البيانات"
      ],
      correct: 1,
      explanation: "الهدفان الرئيسيان هما: فهم كيفية عمل المعالج تحت طبقة البرامج وكيف تؤثر قرارات الأجهزة على البرامج/المبرمجين، والتمكين من اتخاذ قرارات التصميم التي تتجاوز حدود الطبقات المختلفة."
    },
    {
      question: "في مثال تباطؤ النظام متعدد النواة، ما الذي يسبب التفاوت في الأداء بين التطبيقات؟",
      options: [
        "سياسات جدولة وحدة المعالجة المركزية",
        "معدلات فشل ذاكرة التخزين المؤقت",
        "عدم عدالة جدولة متحكم DRAM",
        "زمن انتقال الشبكة"
      ],
      correct: 2,
      explanation: "ينجم التفاوت عن سياسات جدولة متحكم DRAM التي تكون غير عادلة لبعض التطبيقات، ولا سيما سياسات 'أول صف إصابة' و 'أقدم أولاً'."
    },
    {
      question: "ماذا يترتب على الوصول إلى الذاكرة المتعارض مع الصف مقارنة بالوصول إلى الصف المصاب؟",
      options: [
        "وقت وصول أسرع",
        "نفس وقت الوصول",
        "وقت وصول أطول بكثير",
        "وقت وصول أطول قليلاً"
      ],
      correct: 2,
      explanation: "يستغرق الوصول إلى الذاكرة المتعارض مع الصف وقتًا أطول بكثير من الوصول إلى الصف المصاب."
    },
    {
      question: "ماذا تعني FR-FCFS في جدولة متحكم DRAM؟",
      options: [
        "Fast-Ready, First-Come-First-Service",
        "First-Ready, First-Come-First-Service",
        "First-Row, First-Column-First-Service",
        "Fast-Row, First-Cache-First-Service"
      ],
      correct: 1,
      explanation: "FR-FCFS تعني First-Ready, First-Come-First-Service، والتي تعطي الأولوية لعمليات الوصول إلى الصفوف المصابة أولاً، ثم لعمليات الوصول الأقدم أولاً."
    },
    {
      question: "أي نوع من التطبيقات تعطي سياسة 'أول صف إصابة' أولوية غير عادلة؟",
      options: [
        "التطبيقات كثيفة استخدام وحدة المعالجة المركزية",
        "التطبيقات ذات التموضع العالي لمخزن الصفوف",
        "التطبيقات ذات الوصول العشوائي للذاكرة",
        "التطبيقات ذات الاستخدام المنخفض للذاكرة"
      ],
      correct: 1,
      explanation: "تعطي سياسة 'أول صف إصابة' أولوية غير عادلة للتطبيقات ذات التموضع العالي لمخزن الصفوف - الخيوط التي تستمر في الوصول إلى نفس الصف."
    },
    {
      question: "ما الفرق بين أنماط الوصول إلى الذاكرة STREAM و RANDOM؟",
      options: [
        "STREAM أسرع، RANDOM أبطأ",
        "STREAM لديه وصول تسلسلي بتموضع عالٍ لمخزن الصفوف، RANDOM لديه وصول عشوائي بتموضع منخفض لمخزن الصفوف",
        "STREAM يستخدم ذاكرة أكبر، RANDOM يستخدم ذاكرة أقل",
        "STREAM للقراءة، RANDOM للكتابة"
      ],
      correct: 1,
      explanation: "لدى STREAM وصول تسلسلي إلى الذاكرة بتموضع عالٍ جدًا لمخزن الصفوف (معدل إصابة 96%)، بينما لدى RANDOM وصول عشوائي إلى الذاكرة بتموضع منخفض جدًا لمخزن الصفوف (معدل إصابة 3%)."
    },
    {
      question: "ما الذي تتكون منه خلية DRAM؟",
      options: [
        "ترانزستوران ومقاوم",
        "مكثف وترانزستور وصول",
        "دائرة قلب (Flip-flop)",
        "بوابات منطقية متعددة"
      ],
      correct: 1,
      explanation: "تتكون خلية DRAM من مكثف وترانزستور وصول. تخزن البيانات من حيث الشحنة في المكثف."
    },
    {
      question: "لماذا تحتاج DRAM إلى التحديث بشكل دوري؟",
      options: [
        "لمنع تلف البيانات من التداخل الكهرومغناطيسي",
        "لأن شحنة المكثف تتسرب بمرور الوقت",
        "للحفاظ على التزامن مع ساعة وحدة المعالجة المركزية",
        "لتحديث البيانات المخزنة"
      ],
      correct: 1,
      explanation: "تتسرب شحنة مكثف DRAM بمرور الوقت، لذا يحتاج متحكم الذاكرة إلى تحديث كل صف بشكل دوري لاستعادة الشحنة."
    },
    {
      question: "ما هي الفترة الزمنية النموذجية لتحديث DRAM؟",
      options: [
        "64 ميكروثانية",
        "64 مللي ثانية",
        "64 ثانية",
        "64 نانوثانية"
      ],
      correct: 1,
      explanation: "الفترة الزمنية النموذجية للتحديث هي 64 مللي ثانية - كل صف يحتاج إلى التنشيط كل 64 مللي ثانية."
    },
    {
      question: "ما هي عيوب تحديث DRAM المذكورة في الوثيقة؟",
      options: [
        "استهلاك الطاقة فقط",
        "استهلاك الطاقة، تدهور الأداء، تأثير جودة الخدمة، وقيود توسيع السعة",
        "تدهور الأداء فقط",
        "قيود السعة فقط"
      ],
      correct: 1,
      explanation: "عيوب تحديث DRAM تشمل: استهلاك الطاقة، تدهور الأداء (DRAM غير متاحة أثناء التحديث)، تأثير جودة الخدمة/القدرة على التنبؤ (أوقات توقف)، ومعدل التحديث يحد من توسيع سعة DRAM."
    },
    {
      question: "وفقًا لبحث RAIDR، ما هي نسبة تقليل التحديث التي تم تحقيقها؟",
      options: [
        "46.8%",
        "74.6%",
        "15.2%",
        "84.3%"
      ],
      correct: 1,
      explanation: "حقق RAIDR تقليلًا للتحديث بنسبة 74.6% مع حمل تخزين إضافي يبلغ 1.25 كيلوبايت فقط لذاكرة 32 جيجابايت."
    },
    {
      question: "ما هي الملاحظة الرئيسية وراء نهج RAIDR؟",
      options: [
        "جميع صفوف DRAM تحتاج إلى تحديث متكرر",
        "يمكن تحديث معظم صفوف DRAM بشكل أقل تكرارًا دون فقدان البيانات",
        "تحديث DRAM غير ضروري",
        "يجب زيادة تردد التحديث"
      ],
      correct: 1,
      explanation: "الملاحظة الرئيسية لـ RAIDR هي أن معظم صفوف DRAM يمكن تحديثها بشكل أقل تكرارًا دون فقدان البيانات، مما يسمح بمعدلات تحديث مختلفة لصفوف مختلفة."
    },
    {
      question: "ما هي الخطوات الرئيسية الثلاث في نهج RAIDR؟",
      options: [
        "القراءة، الكتابة، التحديث",
        "التنميط، التجميع، التحديث",
        "القياس، الفرز، التحسين",
        "الاختبار، التجميع، الجدولة"
      ],
      correct: 1,
      explanation: "يستخدم RAIDR ثلاث خطوات: 1) تنميط وقت الاحتفاظ بجميع الصفوف، 2) تجميع الصفوف حسب وقت الاحتفاظ باستخدام فلاتر بلوم، 3) تحديث الصفوف في سلال مختلفة بمعدلات مختلفة."
    },
    {
      question: "ما هو الحمل التخزيني الإضافي الذي يتطلبه RAIDR لذاكرة 32 جيجابايت؟",
      options: [
        "1.25 ميجابايت",
        "1.25 كيلوبايت",
        "12.5 كيلوبايت",
        "125 كيلوبايت"
      ],
      correct: 1,
      explanation: "يتطلب RAIDR 1.25 كيلوبايت فقط من التخزين لذاكرة 32 جيجابايت باستخدام تخزين فعال مع فلاتر بلوم."
    },
    {
      question: "ما هو تحسين الأداء الذي حققه RAIDR؟",
      options: [
        "~5%",
        "~9%",
        "~16%",
        "~20%"
      ],
      correct: 1,
      explanation: "حقق RAIDR تحسينًا في الأداء بنسبة 9% تقريبًا إلى جانب تقليل طاقة DRAM الديناميكية/الخاملة بنسبة 16%/20%."
    },
    {
      question: "في مثال استهلاك الذاكرة، ماذا يحدث عندما تتنافس T0 (STREAM) و T1 (RANDOM) على الوصول إلى الذاكرة؟",
      options: [
        "يحصلان على وصول متساوٍ",
        "يتم إعطاء الأولوية لـ T1 بسبب سياسة 'الأقدم أولاً'",
        "يتم خدمة 128 طلبًا من T0 قبل T1 بسبب تموضع مخزن الصفوف",
        "تحدث جدولة عشوائية"
      ],
      correct: 2,
      explanation: "نظرًا لتموضع مخزن الصفوف، يتم خدمة 128 طلبًا من T0 (STREAM) قبل أن تحصل T1 (RANDOM) على الوصول، حيث تستمر T0 في إصابة نفس الصف بينما تسبب T1 تعارضات في الصفوف."
    },
    {
      question: "ما هي الفكرة الرئيسية حول طبقات التجريد من هذا الفصل؟",
      options: [
        "يجب عدم كسر طبقات التجريد أبدًا",
        "كسر طبقات التجريد ومعرفة ما هو تحتها يمكّن من حل المشكلات وتصميم نظام أفضل",
        "مصممو الأجهزة فقط هم من يحتاجون إلى فهم طبقات متعددة",
        "طبقات التجريد مهمة فقط لتطوير البرامج"
      ],
      correct: 1,
      explanation: "الفكرة الرئيسية هي أن كسر طبقات التجريد ومعرفة ما يحدث تحتها يمكّنك من حل المشكلات وتصميم أنظمة مستقبلية أفضل."
    },
    {
      question: "أي مكون في نظام متعدد النواة مشترك بين جميع النوى؟",
      options: [
        "ذاكرة التخزين المؤقت L2",
        "ذاكرة التخزين المؤقت L3 ومتحكم ذاكرة DRAM",
        "سجلات وحدة المعالجة المركزية",
        "فك تشفير التعليمات"
      ],
      correct: 1,
      explanation: "في مخطط النظام متعدد النوى، ذاكرة التخزين المؤقت L3 المشتركة ومتحكم ذاكرة DRAM مشتركة بين جميع النوى، بينما كل نواة لديها ذاكرة التخزين المؤقت L2 الخاصة بها."
    },
    {
      question: "ما الذي يجعل متحكم DRAM عرضة لهجمات حجب الخدمة (Denial of Service)؟",
      options: [
        "آليات التشفير الضعيفة",
        "سياسات الجدولة غير العادلة التي يمكن استغلالها بواسطة برامج مكتوبة خصيصًا",
        "عرض النطاق الترددي غير الكافي",
        "عيوب في تصميم الأجهزة"
      ],
      correct: 1,
      explanation: "سياسات جدولة DRAM غير عادلة لبعض التطبيقات، ويمكن كتابة البرامج لاستغلال هذا الظلم، مما يجعل المتحكم عرضة لهجمات حجب الخدمة."
    },
    {
      question: "ما هو حجم الصف المذكور في مثال استهلاك الذاكرة؟",
      options: [
        "4 كيلوبايت",
        "8 كيلوبايت",
        "16 كيلوبايت",
        "32 كيلوبايت"
      ],
      correct: 1,
      explanation: "في مثال استهلاك الذاكرة، حجم الصف هو 8 كيلوبايت وحجم كتلة ذاكرة التخزين المؤقت هو 64 بايت، مما يؤدي إلى 128 (8 كيلوبايت/64 بايت) طلبًا."
    },
    {
      question: "وفقًا لرسوم بيانية حمل التحديث الزائد، ما هي نسبة حمل الأداء الزائد التي يمكن أن يسببها التحديث؟",
      options: [
        "حتى 8%",
        "حتى 46%",
        "حتى 15%",
        "حتى 47%"
      ],
      correct: 1,
      explanation: "وفقًا لرسوم بيانية أداء حمل التحديث الزائد، يمكن أن يسبب تحديث DRAM حمل أداء زائد يصل إلى 46%."
    },
    {
      question: "أي نهج تعاوني يقترحه الفصل لحل مشاكل الأنظمة المعقدة؟",
      options: [
        "حلول الأجهزة فقط",
        "حلول البرامج فقط",
        "التعاون بين مكونات وطبقات متعددة",
        "حلول على مستوى نظام التشغيل فقط"
      ],
      correct: 2,
      explanation: "يؤكد الفصل أن التعاون بين مكونات وطبقات متعددة يمكن أن يتيح حلولًا وأنظمة أكثر فعالية."
    },
    {
      question: "في مستويات التحويل، ما الذي يقع في أسفل التسلسل الهرمي؟",
      options: [
        "المنطق",
        "الدوائر",
        "الإلكترونات",
        "البنية الدقيقة"
      ],
      correct: 2,
      explanation: "في مستويات التسلسل الهرمي للتحويل، تقع الإلكترونات في الأسفل، مما يمثل المستوى المادي الأساسي."
    },
    {
      question: "ما الذي تهدف الدورة إلى تمكين الطلاب من فعله فيما يتعلق بقرارات التصميم؟",
      options: [
        "اتخاذ القرارات ضمن طبقات فردية فقط",
        "التركيز فقط على تحسين البرامج",
        "اتخاذ قرارات التصميم والتحسين التي تتجاوز حدود الطبقات المختلفة",
        "التخصص في طبقة واحدة محددة"
      ],
      correct: 2,
      explanation: "تهدف الدورة إلى تمكين الطلاب من الشعور بالراحة في اتخاذ قرارات التصميم والتحسين التي تتجاوز حدود الطبقات والمكونات المختلفة للنظام."
    },
    {
      question: "ما هي المعلومات التي يكشفها RAIDR لحل مشكلة التحديث؟",
      options: [
        "أنماط استخدام وحدة المعالجة المركزية",
        "معلومات ملف وقت الاحتفاظ بصفوف DRAM",
        "معدلات فشل ذاكرة التخزين المؤقت",
        "أنماط حركة مرور الشبكة"
      ],
      correct: 1,
      explanation: "يكشف RAIDR معلومات ملف وقت الاحتفاظ بصفوف DRAM إلى متحكم الذاكرة، مما يتيح معدلات تحديث مختلفة لصفوف مختلفة بناءً على خصائص الاحتفاظ بها."
    },
    {
      question: "ما هي العلاقة بين رؤية المبرمج ورؤية مصمم الأجهزة في أنظمة الكمبيوتر؟",
      options: [
        "هما مستقلان تمامًا",
        "رؤية المبرمج فقط هي المهمة",
        "اختيارات المهندس المعماري/المعماري الدقيق تؤثر بشكل حاسم على كلتا الرؤيتين",
        "رؤية مصمم الأجهزة فقط هي المهمة"
      ],
      correct: 2,
      explanation: "تتضمن رؤية المهندس المعماري/المعماري الدقيق تصميم أجهزة كمبيوتر تلبي أهداف تصميم النظام، وتؤثر هذه الاختيارات بشكل حاسم على كل من مبرمج البرامج ومصمم الأجهزة."
    }
  ],
  'الفصل 4: مقدمة وأساسيات': [
    {
      question: "وفقًا لريتشارد هامينغ، ما هو الغرض من الحوسبة؟",
      options: [
        "لتوليد الأرقام والبيانات",
        "لحل المعادلات الرياضية",
        "لاكتساب البصيرة، وليس الأرقام",
        "لمعالجة المعلومات بسرعة"
      ],
      correct: 2,
      explanation: "صرح ريتشارد هامينغ بأن 'الغرض من الحوسبة هو البصيرة، وليس الأرقام'. القيمة الحقيقية للحوسبة لا تكمن فقط في توليد الأرقام (البيانات)، بل في استخدام تلك البيانات لاكتساب الفهم والمعرفة (البصيرة)."
    },
    {
      question: "ما هي مستويات التحويل في أنظمة الكمبيوتر من الأعلى إلى الأسفل؟",
      options: [
        "المشكلة ← الخوارزمية ← البرنامج ← ISA ← البنية الدقيقة ← المنطق ← الدوائر ← الإلكترونات",
        "الخوارزمية ← المشكلة ← البرنامج ← ISA ← المنطق ← البنية الدقيقة ← الدوائر ← الإلكترونات",
        "المشكلة ← البرنامج ← الخوارزمية ← ISA ← البنية الدقيقة ← المنطق ← الدوائر ← الإلكترونات",
        "المشكلة ← الخوارزمية ← ISA ← البرنامج ← البنية الدقيقة ← المنطق ← الدوائر ← الإلكترونات"
      ],
      correct: 0,
      explanation: "التسلسل الهرمي correct هو: المشكلة ← الخوارزمية ← البرنامج/اللغة ← نظام وقت التشغيل ← ISA (البنية) ← البنية الدقيقة ← المنطق ← الدوائر ← الإلكترونات، ويمثل التحويل من المشكلات عالية المستوى إلى التنفيذ المادي."
    },
    {
      question: "ما هو التجريد في سياق أنظمة الكمبيوتر؟",
      options: [
        "طريقة لجعل الأنظمة أكثر تعقيدًا",
        "مستوى أعلى يحتاج فقط إلى معرفة الواجهة للمستوى الأدنى، وليس كيفية تنفيذها",
        "طريقة لدمج مستويات متعددة في مستوى واحد",
        "تقنية للتخلص من المكونات غير الضرورية"
      ],
      correct: 1,
      explanation: "يعني التجريد أن المستوى الأعلى يحتاج فقط إلى معرفة الواجهة للمستوى الأدنى، وليس كيفية تنفيذ المستوى الأدنى. على سبيل المثال، لا يحتاج مبرمج لغة عالية المستوى إلى معرفة ما هو ISA أو كيفية تنفيذ الكمبيوتر للتعليمات."
    },
    {
      question: "لماذا قد تحتاج إلى فهم ما يحدث في طبقات التجريد الأساسية؟",
      options: [
        "لأغراض أكاديمية فقط",
        "عندما تعمل البرامج ببطء، بشكل غير صحيح، أو تستهلك الكثير من الطاقة",
        "لجعل البرمجة أكثر صعوبة",
        "ليس من الضروري أبدًا فهم الطبقات الأساسية"
      ],
      correct: 1,
      explanation: "يصبح فهم الطبقات الأساسية أمرًا حاسمًا عندما: يعمل البرنامج ببطء، لا يعمل بشكل صحيح، يستهلك الكثير من الطاقة، أو عند تصميم أنظمة أكثر كفاءة وأداءً أعلى."
    },
    {
      question: "في مثال هجوم أداء الذاكرة في النظام متعدد النواة، ما الذي يسبب التفاوت في التباطؤ بين التطبيقات؟",
      options: [
        "سرعات وحدة المعالجة المركزية المختلفة",
        "اختلافات حجم ذاكرة التخزين المؤقت",
        "عدم عدالة سياسة جدولة DRAM بسبب تموضع مخزن الصفوف",
        "جدولة نظام التشغيل"
      ],
      correct: 2,
      explanation: "ينجم التفاوت عن سياسات جدولة DRAM التي تكون غير عادلة لبعض التطبيقات. سياسة 'أول صف إصابة' تعطي أولوية غير عادلة للتطبيقات ذات التموضع العالي لمخزن الصفوف، بينما سياسة 'الأقدم أولاً' تعطي أولوية غير عادلة للتطبيقات كثيفة الذاكرة."
    },
    {
      question: "ما هي سياسة جدولة FR-FCFS في متحكمات DRAM؟",
      options: [
        "First-Request, First-Come-First-Service",
        "First-Ready, First-Come-First-Service",
        "First-Row, First-Column-First-Service",
        "Fast-Response, First-Come-First-Service"
      ],
      correct: 1,
      explanation: "FR-FCFS تعني First-Ready, First-Come-First-Service. لديها قاعدتان: (1) 'أول صف إصابة': خدمة عمليات الوصول إلى الذاكرة التي تصيب الصف أولاً، (2) 'الأقدم أولاً': ثم خدمة عمليات الوصول الأقدم أولاً."
    },
    {
      question: "ما الذي يجعل الوصول إلى صف متعارض في DRAM أبطأ بكثير من الوصول إلى صف مصاب؟",
      options: [
        "تأخيرات معالجة وحدة المعالجة المركزية",
        "عقوبات عدم إصابة ذاكرة التخزين المؤقت",
        "الحاجة إلى إغلاق الصف الحالي وفتح صف جديد في DRAM",
        "زمن انتقال الشبكة"
      ],
      correct: 2,
      explanation: "يتطلب الوصول إلى صف متعارض إغلاق الصف المفتوح حاليًا وفتح صف جديد في DRAM، الأمر الذي يستغرق وقتًا أطول بكثير من الوصول إلى البيانات من صف مفتوح بالفعل (إصابة الصف)."
    },
    {
      question: "في مثال استهلاك أداء الذاكرة، ما الذي يميز نمط الوصول STREAM؟",
      options: [
        "وصول عشوائي للذاكرة بتموضع منخفض لمخزن الصفوف",
        "وصول تسلسلي للذاكرة بتموضع عالٍ جدًا لمخزن الصفوف (معدل إصابة 96%)",
        "وصول ذاكرة مبعثر بتموضع متوسط",
        "نمط وصول ذاكرة دائري"
      ],
      correct: 1,
      explanation: "يتميز STREAM بالوصول التسلسلي إلى الذاكرة بتموضع عالٍ جدًا لمخزن الصفوف (معدل إصابة 96%) وهو كثيف الذاكرة، مما يجعله مستهلكًا لأداء الذاكرة."
    },
    {
      question: "ما الذي يميز نمط الوصول RANDOM في مثال أداء الذاكرة؟",
      options: [
        "وصول تسلسلي بتموضع عالٍ",
        "وصول عشوائي للذاكرة بتموضع منخفض جدًا لمخزن الصفوف (معدل إصابة 3%)",
        "وصول منظم بتموضع متوسط",
        "نمط وصول يمكن التنبؤ به"
      ],
      correct: 1,
      explanation: "يتميز RANDOM بالوصول العشوائي إلى الذاكرة بتموضع منخفض جدًا لمخزن الصفوف (معدل إصابة 3%) وهو كثيف الذاكرة بالمثل مقارنة بـ STREAM."
    },
    {
      question: "ما الذي تتكون منه خلية DRAM؟",
      options: [
        "ترانزستوران ومقاوم",
        "مكثف وترانزستور وصول",
        "ثلاثة مكثفات متسلسلة",
        "دائرة قلب (Flip-flop)"
      ],
      correct: 1,
      explanation: "تتكون خلية DRAM من مكثف وترانزستور وصول. تخزن البيانات من حيث الشحنة في المكثف."
    },
    {
      question: "لماذا تحتاج DRAM إلى التحديث؟",
      options: [
        "لتحسين الأداء",
        "لأن شحنة المكثف تتسرب بمرور الوقت",
        "لتقليل استهلاك الطاقة",
        "لزيادة سعة التخزين"
      ],
      correct: 1,
      explanation: "تتسرب شحنة مكثف DRAM بمرور الوقت، لذا يحتاج متحكم الذاكرة إلى تحديث كل صف بشكل دوري لاستعادة الشحنة. عادة ما يجب تحديث كل صف كل 64 مللي ثانية."
    },
    {
      question: "ما هي العيوب الرئيسية لتحديث DRAM؟",
      options: [
        "زيادة التكلفة فقط",
        "تدهور الأداء فقط",
        "استهلاك الطاقة، تدهور الأداء، تأثير جودة الخدمة، وقيود توسيع السعة",
        "استهلاك الطاقة فقط"
      ],
      correct: 2,
      explanation: "يحتوي تحديث DRAM على العديد من العيوب: استهلاك الطاقة (كل تحديث يستهلك طاقة)، تدهور الأداء (DRAM غير متاحة أثناء التحديث)، تأثير جودة الخدمة/القدرة على التنبؤ (أوقات توقف طويلة)، ومعدل التحديث يحد من توسيع سعة DRAM."
    },
    {
      question: "ما هي الفترة الزمنية النموذجية لتحديث صفوف DRAM؟",
      options: [
        "64 ميكروثانية",
        "64 مللي ثانية",
        "64 ثانية",
        "64 نانوثانية"
      ],
      correct: 1,
      explanation: "الفترة الزمنية النموذجية للتحديث هي 64 مللي ثانية (64 ms). يجب تنشيط (تحديث) كل صف كل 64 مللي ثانية لاستعادة الشحنة في المكثفات."
    },
    {
      question: "ما هي الملاحظة الرئيسية التي يقدمها RAIDR حول تحديث DRAM؟",
      options: [
        "جميع الصفوف تحتاج إلى تحديث متكرر",
        "يمكن تحديث معظم صفوف DRAM بشكل أقل تكرارًا دون فقدان البيانات",
        "التحديث غير ضروري",
        "فقط بعض الصفوف تحتاج إلى أي تحديث"
      ],
      correct: 1,
      explanation: "يلاحظ RAIDR أن معظم صفوف DRAM يمكن تحديثها بشكل أقل تكرارًا دون فقدان البيانات، مما يؤدي إلى فكرة تحديث الصفوف التي تحتوي على خلايا ضعيفة بشكل متكرر والصفوف الأخرى بشكل أقل."
    },
    {
      question: "كيف يحقق RAIDR تقليل التحديث؟",
      options: [
        "عن طريق إلغاء التحديث تمامًا",
        "عن طريق تنميط أوقات الاحتفاظ، وتجميع الصفوف، وتحديث المجموعات المختلفة بمعدلات مختلفة",
        "عن طريق استخدام تقنية DRAM مختلفة",
        "عن طريق زيادة تردد التحديث لجميع الصفوف"
      ],
      correct: 1,
      explanation: "يعمل RAIDR في ثلاث خطوات: (1) تنميط وقت الاحتفاظ بجميع الصفوف، (2) تجميع الصفوف حسب وقت الاحتفاظ في متحكم الذاكرة باستخدام فلاتر بلوم، (3) تحديث الصفوف في سلال مختلفة بمعدلات مختلفة."
    },
    {
      question: "ما هي الفوائد التي حققها RAIDR؟",
      options: [
        "تحسين الأداء فقط",
        "74.6% تقليل التحديث، ~16%/20% تقليل طاقة DRAM، ~9% تحسين الأداء",
        "تقليل الطاقة فقط",
        "تقليل التحديث فقط"
      ],
      correct: 1,
      explanation: "يحقق RAIDR فوائد متعددة: 74.6% تقليل التحديث مع حمل تخزين إضافي يبلغ 1.25 كيلوبايت فقط، ~16%/20% تقليل طاقة DRAM الديناميكية/الخاملة، و ~9% تحسين الأداء، مع زيادة الفوائد بزيادة سعة DRAM."
    },
    {
      question: "ما هو أحد الهدفين الرئيسيين لدورة هندسة الكمبيوتر المذكورة في المحاضرة؟",
      options: [
        "تعلم لغات البرمجة",
        "فهم كيفية عمل المعالج تحت طبقة البرامج",
        "تصميم أنظمة التشغيل",
        "بناء مكونات الأجهزة"
      ],
      correct: 1,
      explanation: "أحد الأهداف الرئيسية هو فهم كيفية عمل المعالج تحت طبقة البرامج وكيف تؤثر القرارات المتخذة في الأجهزة على البرامج/المبرمج."
    },
    {
      question: "ما هو الهدف الرئيسي الثاني لدورة هندسة الكمبيوتر؟",
      options: [
        "حفظ مجموعات التعليمات",
        "التمكين من اتخاذ قرارات التصميم والتحسين التي تتجاوز حدود الطبقات المختلفة",
        "التركيز فقط على تصميم الأجهزة",
        "التخصص في طبقة تجريد واحدة"
      ],
      correct: 1,
      explanation: "الهدف الرئيسي الثاني هو تمكين الطلاب من الشعور بالراحة في اتخاذ قرارات التصميم والتحسين التي تتجاوز حدود الطبقات والمكونات المختلفة للنظام."
    },
    {
      question: "في سيناريو استهلاك أداء الذاكرة، كم عدد الطلبات تقريبًا لتطبيق STREAM (T0) يتم خدمتها قبل خدمة تطبيق RANDOM (T1)؟",
      options: [
        "64 طلبًا",
        "96 طلبًا",
        "128 طلبًا",
        "256 طلبًا"
      ],
      correct: 2,
      explanation: "مع حجم صف يبلغ 8 كيلوبايت وحجم كتلة ذاكرة تخزين مؤقت يبلغ 64 بايت، هناك 128 (8 كيلوبايت/64 بايت) طلبًا من T0 (STREAM) يتم خدمتها قبل أن يحصل T1 (RANDOM) على فرصة، مما يوضح عدم عدالة سياسة 'أول صف إصابة'."
    },
    {
      question: "ما هي الفكرة الرئيسية حول طبقات التجريد من هذه المحاضرة؟",
      options: [
        "يجب عدم عبور طبقات التجريد أبدًا",
        "كسر طبقات التجريد ومعرفة ما هو تحتها يمكّن من حل المشكلات",
        "مصممو الأجهزة فقط هم من يحتاجون إلى فهم طبقات متعددة",
        "طبقات التجريد هي مفاهيم نظرية فقط"
      ],
      correct: 1,
      explanation: "الفكرة الرئيسية هي أن كسر طبقات التجريد (بين المكونات ومستويات التسلسل الهرمي للتحويل) ومعرفة ما هو تحتها يمكّنك من حل المشكلات وتصميم أنظمة مستقبلية أفضل. يمكن أن يتيح التعاون بين مكونات وطبقات متعددة حلولًا أكثر فعالية."
    }
  ],
  "الفصل الخامس: ما هو الكمبيوتر ونموذج فون نيومان": [
    {
      question: "ما هي المكونات الرئيسية الثلاثة التي تحدد الكمبيوتر؟",
      options: [
        "الأجهزة، البرامج، والمستخدمون",
        "الحساب، الاتصال، والتخزين (الذاكرة)",
        "الإدخال، المعالجة، والإخراج",
        "وحدة المعالجة المركزية، ذاكرة الوصول العشوائي، والقرص الصلب"
      ],
      correct: 1,
      explanation: "يتم تعريف الكمبيوتر من خلال ثلاثة مكونات رئيسية: الحساب (المعالجة)، الاتصال (الإدخال/الإخراج)، والتخزين (الذاكرة). تعمل هذه المكونات معًا لتشكيل نظام حوسبة كامل."
    },
    {
      question: "ما هما الخاصيتان الرئيسيتان لنموذج فون نيومان؟",
      options: [
        "معالجة سريعة وذاكرة كبيرة",
        "برنامج مخزن ومعالجة تعليمات متسلسلة",
        "نوى متعددة ومعالجة متوازية",
        "إمكانيات الإدخال/الإخراج وواجهة المستخدم"
      ],
      correct: 1,
      explanation: "يحتوي نموذج فون نيومان على خاصيتين رئيسيتين: (1) برنامج مخزن - تعليمات مخزنة في مصفوفة ذاكرة خطية مع ذاكرة موحدة للتعليمات والبيانات، (2) معالجة تعليمات متسلسلة - تعليمة واحدة تتم معالجتها في كل مرة مع عداد البرنامج يحدد التعليمات الحالية."
    },
    {
      question: "في نموذج فون نيومان، ما الذي يحدد ما إذا كانت القيمة المخزنة تفسر كتعليمات؟",
      options: [
        "القيمة نفسها",
        "موقع الذاكرة",
        "إشارات التحكم",
        "نوع البيانات"
      ],
      correct: 2,
      explanation: "في نموذج فون نيومان، يعتمد تفسير القيمة المخزنة على إشارات التحكم. يمكن تفسير نفس نمط البت كبيانات أو كتعليمات اعتمادًا على كيفية معالجة وحدة التحكم لها."
    },
    {
      question: "ما هو الاسم الآخر لبنية فون نيومان؟",
      options: [
        "كمبيوتر معالجة متوازية",
        "كمبيوتر برنامج مخزن",
        "كمبيوتر تدفق البيانات",
        "كمبيوتر متعدد النواة"
      ],
      correct: 1,
      explanation: "تُسمى بنية فون نيومان أيضًا 'كمبيوتر برنامج مخزن' لأن التعليمات تخزن في الذاكرة جنبًا إلى جنب مع البيانات، بدلاً من أن تكون موصلة بشكل ثابت في الجهاز."
    },
    {
      question: "في نموذج فون نيومان، كيف يتم تقدم عداد البرنامج (مؤشر التعليمات)؟",
      options: [
        "عشوائيًا بناءً على التعليمات المتاحة",
        "بناءً على توفر البيانات",
        "بشكل تسلسلي باستثناء تعليمات نقل التحكم",
        "بشكل متوازٍ لتعليمات متعددة"
      ],
      correct: 2,
      explanation: "يتم تقدم عداد البرنامج بشكل تسلسلي باستثناء تعليمات نقل التحكم (مثل القفزات، التفرعات، الاستدعاءات). هذا التقدم التسلسلي هو سمة أساسية لتنفيذ فون نيومان."
    },
    {
      question: "في نموذج تدفق البيانات، متى يتم تنفيذ تعليمات؟",
      options: [
        "عندما يشير مؤشر التعليمات إليها",
        "عندما تكون جميع معاملاتها جاهزة",
        "بترتيب تسلسلي",
        "عندما تكون وحدة المعالجة المركزية خاملة"
      ],
      correct: 1,
      explanation: "في نموذج تدفق البيانات، يتم تنفيذ التعليمات عندما تكون جميع معاملاتها جاهزة (أي، عندما تحتوي جميع المدخلات على رموز). لا يوجد مؤشر تعليمات - يتم تشغيل التنفيذ بتوفر البيانات."
    },
    {
      question: "ما هو الفرق الرئيسي بين نماذج تنفيذ فون نيومان وتدفق البيانات؟",
      options: [
        "فون نيومان يستخدم ذاكرة أكبر",
        "فون نيومان موجه بالتحكم/تسلسلي، تدفق البيانات موجه بالبيانات/متوازٍ",
        "تدفق البيانات أبطأ من فون نيومان",
        "فون نيومان يتطلب أجهزة خاصة"
      ],
      correct: 1,
      explanation: "نموذج فون نيومان موجه بالتحكم مع تنفيذ تسلسلي (مؤشر التعليمات يتحكم في الترتيب)، بينما نموذج تدفق البيانات موجه بالبيانات مع تنفيذ متوازٍ محتمل (توفر البيانات يتحكم في الترتيب)."
    },
    {
      question: "أي نموذج تنفيذ هو أكثر توازيًا بطبيعته؟",
      options: [
        "نموذج فون نيومان",
        "نموذج تدفق البيانات",
        "كلاهما متوازٍ بالتساوي",
        "لا يدعم أي منهما التوازي"
      ],
      correct: 1,
      explanation: "نموذج تدفق البيانات أكثر توازيًا بطبيعته لأن تعليمات متعددة يمكن أن 'تطلق' (تنفذ) في وقت واحد عندما تكون معاملاتها جاهزة، على عكس التنفيذ التسلسلي لفون نيومان."
    },
    {
      question: "في آلة تدفق البيانات، ما الذي يتسبب في 'إطلاق' عقدة تدفق البيانات؟",
      options: [
        "إشارة ساعة",
        "مؤشر التعليمات",
        "عندما تكون جميع مدخلاتها تحتوي على رموز (جاهزة)",
        "محفز عشوائي"
      ],
      correct: 2,
      explanation: "تطلق عقدة تدفق البيانات (يتم جلبها وتنفيذها) عندما تكون جميع مدخلاتها جاهزة، أي عندما تحتوي جميع المدخلات على رموز. هذا هو مبدأ التنفيذ الأساسي للحوسبة بتدفق البيانات."
    },
    {
      question: "ما هي بنيات مجموعات التعليمات الرئيسية التي تستخدم نموذج فون نيومان اليوم؟",
      options: [
        "x86 فقط",
        "x86، ARM، MIPS، SPARC، Alpha، POWER",
        "ARM و x86 فقط",
        "البنيات القديمة فقط"
      ],
      correct: 1,
      explanation: "جميع بنيات مجموعات التعليمات الرئيسية اليوم تستخدم نموذج فون نيومان، بما في ذلك بنيات x86، ARM، MIPS، SPARC، Alpha، و POWER."
    },
    {
      question: "على مستوى البنية الدقيقة، كيف تنفذ المعالجات الحديثة التعليمات فعليًا؟",
      options: [
        "تمامًا كما هو محدد بواسطة نموذج فون نيومان",
        "بشكل مختلف تمامًا عن نموذج فون نيومان (مقسمة، خارج الترتيب، إلخ)",
        "بترتيب تسلسلي فقط",
        "بدون أي تحسين"
      ],
      correct: 1,
      explanation: "تنفذ البنيات الدقيقة الحديثة بشكل مختلف تمامًا عن نموذج فون نيومان - باستخدام التنفيذ المقسم، تعليمات متعددة في نفس الوقت، التنفيذ خارج الترتيب، وذاكرات تخزين مؤقت منفصلة للتعليمات/البيانات، ولكن هذا لا يُكشف للبرامج."
    },
    {
      question: "ما هو الفرق الرئيسي بين ISA والبنية الدقيقة؟",
      options: [
        "ISA هي الأجهزة، البنية الدقيقة هي البرامج",
        "ISA هي الواجهة المتفق عليها بين البرامج/الأجهزة، البنية الدقيقة هي التنفيذ المحدد",
        "هما نفس الشيء",
        "ISA قديمة، البنية الدقيقة جديدة"
      ],
      correct: 1,
      explanation: "ISA هي الواجهة المتفق عليها بين البرامج والأجهزة (ما يحتاج كاتب البرامج إلى معرفته)، بينما البنية الدقيقة هي التنفيذ المحدد لـ ISA (غير مرئي للبرامج)."
    },
    {
      question: "باستخدام تشبيه السيارة، ما الذي يمثل ISA مقابل البنية الدقيقة؟",
      options: [
        "المحرك مقابل العجلات",
        "دواسة الوقود (الواجهة) مقابل المكونات الداخلية للمحرك (التنفيذ)",
        "عجلة القيادة مقابل الفرامل",
        "الخارج مقابل الداخل"
      ],
      correct: 1,
      explanation: "تمثل دواسة الوقود ISA (واجهة 'التسارع' التي يستخدمها السائق)، بينما تمثل المكونات الداخلية للمحرك البنية الدقيقة (كيف يتم 'التسارع' فعليًا)."
    },
    {
      question: "ما الذي يتغير بشكل أسرع: ISA أم البنية الدقيقة؟",
      options: [
        "ISA تتغير بشكل أسرع",
        "البنية الدقيقة تتغير بشكل أسرع",
        "يتغيران بنفس المعدل",
        "لا يتغير أي منهما"
      ],
      correct: 1,
      explanation: "تتغير البنية الدقيقة عادةً بشكل أسرع من ISA. هناك عدد قليل من ISAs (x86، ARM، SPARC، MIPS، Alpha) ولكن العديد من البنيات الدقيقة. على سبيل المثال، لدى x86 ISA العديد من التطبيقات: 286، 386، 486، بنتيوم، بنتيوم برو، بنتيوم 4، كور، إلخ."
    },
    {
      question: "ماذا تشير المعالجة الفائقة إلى؟",
      options: [
        "استخدام نوى وحدة المعالجة المركزية متعددة",
        "تقنية لتنفيذ تعليمات متعددة بالتوازي داخل نفس نواة المعالج",
        "زيادة تردد الساعة",
        "إضافة المزيد من الذاكرة"
      ],
      correct: 1,
      explanation: "المعالجة الفائقة هي تقنية تستخدم في تصميم المعالجات الدقيقة الحديثة لزيادة إنتاجية التعليمات عن طريق تنفيذ تعليمات متعددة بالتوازي داخل نفس نواة المعالج، مما يسمح بأكثر من تعليمات واحدة لكل دورة ساعة."
    },
    {
      question: "أي مما يلي جزء من ISA؟",
      options: [
        "عدد المنافذ لملف السجل",
        "رمز تشغيل تعليمة ADD",
        "ما إذا كان الجهاز يستخدم التنفيذ المقسم",
        "عدد الدورات لتنفيذ تعليمة MUL"
      ],
      correct: 1,
      explanation: "رمز تشغيل تعليمة ADD جزء من ISA لأنه يحدد واجهة التعليمات. عدد منافذ ملف السجل، التنفيذ المقسم، ودورات التنفيذ هي تفاصيل تنفيذ البنية الدقيقة غير مرئية للبرامج."
    },
    {
      question: "أي مما يلي جزء من البنية الدقيقة؟",
      options: [
        "عدد السجلات ذات الأغراض العامة",
        "رموز تشغيل التعليمات",
        "عدد المنافذ لملف السجل",
        "أوضاع عنونة الذاكرة"
      ],
      correct: 2,
      explanation: "عدد المنافذ لملف السجل هو تفصيل في البنية الدقيقة (خيار تنفيذ للأداء). عدد السجلات، رموز التشغيل، وأوضاع العنونة هي مواصفات ISA مرئية للمبرمجين."
    },
    {
      question: "ما الذي تحدده ISA فيما يتعلق بالتعليمات؟",
      options: [
        "تنسيق التعليمات فقط",
        "رموز التشغيل، أوضاع العنونة، أنواع البيانات، أنواع وتنسيقات التعليمات، السجلات، رموز الشرط",
        "وقت التنفيذ فقط",
        "متطلبات الذاكرة فقط"
      ],
      correct: 1,
      explanation: "تحدد ISA عناصر شاملة متعلقة بالتعليمات: رموز التشغيل، أوضاع العنونة، أنواع البيانات، أنواع وتنسيقات التعليمات، السجلات، ورموز الشرط - كل ما يحتاج المبرمج إلى معرفته لكتابة البرامج."
    },
    {
      question: "أي مما يلي خيارات تنفيذ البنية الدقيقة؟",
      options: [
        "إدارة الذاكرة الافتراضية",
        "التنفيذ المقسم، التنفيذ خارج الترتيب، سياسات التخزين المؤقت، المعالجة الفائقة",
        "تعريف مجموعة التعليمات",
        "أوضاع عنونة الذاكرة"
      ],
      correct: 1,
      explanation: "تتضمن البنية الدقيقة خيارات تنفيذ مثل التنفيذ المقسم، التنفيذ بالترتيب أم خارج الترتيب، جدولة الوصول إلى الذاكرة، المعالجة الفائقة، سياسات التخزين المؤقت، الجلب المسبق، إلخ - كل ذلك يتم بدون كشف للبرامج."
    },
    {
      question: "في مثال التنفيذ خارج الترتيب بالتعليمات (1) mov eax,0 (2) mov edx,1 (3) mov edx,3 (4) inc edx (5) mov ecx,3، ما الذي يحدد ترتيب التنفيذ؟",
      options: [
        "يجب الحفاظ على ترتيب البرنامج الأصلي",
        "تحدد الترانزستورات/الأجهزة بناءً على التبعيات والموارد المتاحة",
        "اختيار عشوائي",
        "دائمًا يتم التنفيذ بترتيب عكسي"
      ],
      correct: 1,
      explanation: "في التنفيذ خارج الترتيب، تحدد الترانزستورات (الأجهزة) التعليمات التي يجب تنفيذها بناءً على تبعيات البيانات والموارد التنفيذية المتاحة، مع الحفاظ على دلالات البرنامج correctة."
    }
  ],
  'الفصل 6: مقدمة في المقايضات في ISA': [
    {
      question: "ما هي نقطة التصميم في هندسة الكمبيوتر؟",
      options: [
        "موقع محدد على شريحة المعالج",
        "مجموعة من اعتبارات التصميم وأهميتها التي تؤدي إلى مقايضات",
        "المرحلة النهائية لتصميم المعالج",
        "منهجية اختبار للمعالجات"
      ],
      correct: 1,
      explanation: "نقطة التصميم هي مجموعة من اعتبارات التصميم وأهميتها التي تؤدي إلى مقايضات في كل من ISA والبنية الدقيقة. يتم تحديدها بواسطة مساحة التطبيق والسوق/المستخدمين المستهدفين."
    },
    {
      question: "أي مما يلي هي اعتبارات تصميم رئيسية مذكورة في المحاضرة؟",
      options: [
        "التكلفة والأداء فقط",
        "التكلفة، الأداء، استهلاك الطاقة، استهلاك الطاقة (عمر البطارية)، التوفر، الموثوقية، الوقت اللازم للتسويق",
        "الأداء والموثوقية فقط",
        "تعقيد الأجهزة وتوافق البرامج"
      ],
      correct: 1,
      explanation: "تشمل اعتبارات التصميم الرئيسية: التكلفة، الأداء، أقصى استهلاك للطاقة، استهلاك الطاقة (عمر البطارية)، التوفر، الموثوقية والصحة، والوقت اللازم للتسويق."
    },
    {
      question: "ما الذي يحدد نقطة تصميم نظام الكمبيوتر؟",
      options: [
        "التقنية المتاحة",
        "تكلفة التصنيع",
        "مساحة 'المشكلة' (مساحة التطبيق) والسوق/المستخدمون المستهدفون",
        "اللوائح الحكومية"
      ],
      correct: 2,
      explanation: "يتم تحديد نقطة التصميم بواسطة مساحة 'المشكلة' (مساحة التطبيق) والسوق/المستخدمين المستهدفين، مما يؤثر على الأهمية النسبية لاعتبارات التصميم المختلفة."
    },
    {
      question: "ما هما المكونان الرئيسيان للتعليمات؟",
      options: [
        "العنوان والبيانات",
        "رمز التشغيل والمعاملات",
        "المصدر والوجهة",
        "الإدخال والإخراج"
      ],
      correct: 1,
      explanation: "تتكون التعليمات من: (1) رمز التشغيل - ما تفعله التعليمات، و (2) المعاملات - لمن تقوم بها. هذا هو العنصر الأساسي لواجهة الأجهزة/البرامج."
    },
    {
      question: "ما هو مفهوم 'توجيه البتات' في ترميز التعليمات؟",
      options: [
        "استخدام البتات للتحكم في اتجاه تدفق البيانات",
        "بت في التعليمات يحدد تفسير البتات الأخرى",
        "توجيه البتات نحو وحدة المنطق والحساب",
        "إدارة العمليات على مستوى البتات"
      ],
      correct: 1,
      explanation: "توجيه البتات هو مفهوم حيث يحدد بت في التعليمات تفسير البتات الأخرى، مما يسمح باستخدام أكثر كفاءة لمساحة ترميز التعليمات."
    },
    {
      question: "في آلة ذات 0 عنوان (مكدس)، كيف يتم تنفيذ العمليات؟",
      options: [
        "باستخدام السجلات فقط",
        "تعمل العمليات على العناصر العلوية للمكدس (دفع/سحب)",
        "عنونة الذاكرة المباشرة",
        "باستخدام سجل التجميع"
      ],
      correct: 1,
      explanation: "في آلة مكدس ذات 0 عنوان، تعمل العمليات على العناصر العلوية للمكدس. يتم دفع المعاملات إلى المكدس، وتنفذ العمليات على العناصر العلوية للمكدس، ويتم سحب النتائج."
    },
    {
      question: "ما الذي يميز آلة ذات 1 عنوان (تجميع)؟",
      options: [
        "تستخدم جميع العمليات المكدس",
        "العمليات تستخدم سجل التجميع (op ACC, ld A, st A)",
        "معاملان لكل تعليمة",
        "ثلاثة معاملات منفصلة"
      ],
      correct: 1,
      explanation: "في آلة تجميع ذات 1 عنوان، تتضمن العمليات عادة سجل التجميع (ACC). التعليمات مثل 'op ACC'، 'ld A' (تحميل إلى ACC)، 'st A' (تخزين من ACC) هي مميزة."
    },
    {
      question: "في آلة ذات 2 عنوان، ماذا يحدث لأحد المعاملات؟",
      options: [
        "يبقى دون تغيير",
        "معامل واحد هو المصدر والوجهة (يتم تدميره)",
        "يتم نسخه إلى الذاكرة",
        "يتم دفعه إلى المكدس"
      ],
      correct: 1,
      explanation: "في آلة ذات 2 عنوان (op S,D)، يعمل أحد المعاملات كمصدر ووجهة، مما يعني أن القيمة الأصلية يتم الكتابة فوقها (تدميرها) بنتيجة العملية."
    },
    {
      question: "ما هي الميزة الرئيسية لآلة ذات 3 عناوين؟",
      options: [
        "حجم تعليمات أصغر",
        "المصدر والوجهة منفصلان (op S1,S2,D)",
        "تنفيذ أسرع",
        "استهلاك طاقة أقل"
      ],
      correct: 1,
      explanation: "في آلة ذات 3 عناوين (op S1,S2,D)، يكون معاملا المصدر والوجهة منفصلين، مما يعني أن قيم المصدر محفوظة ولا يتم تدميرها أثناء العمليات."
    },
    {
      question: "ما هي المزايا الرئيسية لآلات المكدس؟",
      options: [
        "حجم تعليمات كبير ومنطق معقد",
        "حجم تعليمات صغير، منطق أبسط، كود مدمج، استدعاءات إجراءات فعالة",
        "مرونة عالية وعمليات متوازية",
        "دعم أنواع بيانات معقدة"
      ],
      correct: 1,
      explanation: "تتميز آلات المكدس بـ: حجم تعليمات صغير (لا توجد حاجة لمعاملات لتعليمات التشغيل)، منطق أبسط، كود مدمج، واستدعاءات إجراءات فعالة (جميع المعلمات على المكدس بدون دورات إضافية لتمرير المعلمات)."
    },
    {
      question: "ما هي العيوب الرئيسية لآلات المكدس؟",
      options: [
        "حجم كود كبير وتنفيذ بطيء",
        "العمليات الحسابية التي لا يمكن التعبير عنها بسهولة في تدوين لاحق (postfix) صعبة؛ مرونة محدودة",
        "استهلاك طاقة عالٍ",
        "فك تشفير تعليمات معقد"
      ],
      correct: 1,
      explanation: "تتميز آلات المكدس بعيوب: العمليات الحسابية التي لا يمكن التعبير عنها بسهولة في تدوين لاحق صعبة التخطيط، لا يمكنها إجراء عمليات على العديد من القيم في وقت واحد (فقط أعلى N قيم)، وتفتقر إلى المرونة."
    },
    {
      question: "PDP-11 هو مثال على أي نوع من الآلات؟",
      options: [
        "آلة ذات 0 عنوان (مكدس)",
        "آلة ذات 1 عنوان (تجميع)",
        "آلة ذات 2 عنوان",
        "آلة ذات 3 عناوين"
      ],
      correct: 2,
      explanation: "PDP-11 هي آلة ذات 2 عنوان. تحتوي تعليمة ADD الخاصة بها على رمز تشغيل 4 بت و2 مُحددات معامل 6 بت، مع بتات محدودة لتحديد تعليمة."
    },
    {
      question: "ما هي العيب الرئيسي لتصميم PDP-11 ذو 2 عنوان؟",
      options: [
        "الكثير من المعاملات",
        "يتم دائمًا تدمير أحد معاملي المصدر بالنتيجة",
        "التعليمات طويلة جدًا",
        "لا يمكن الوصول إلى الذاكرة"
      ],
      correct: 1,
      explanation: "في تصميم PDP-11 ذو 2 عنوان، يتم دائمًا تدمير أحد معاملي المصدر (الكتابة فوقه) بنتيجة التعليمات، مما يتطلب خطوات إضافية للحفاظ على القيم الأصلية عند الحاجة."
    },
    {
      question: "ما هو نوع آلة بنية ألفا؟",
      options: [
        "آلة ذاكرة/ذاكرة ذات 2 عنوان",
        "آلة مكدس",
        "آلة تحميل/تخزين ذات 3 عناوين",
        "آلة تجميع ذات 1 عنوان"
      ],
      correct: 2,
      explanation: "ألفا هي آلة تحميل/تخزين ذات 3 عناوين، مما يعني أنها تحتوي على معاملات مصدر ووجهة منفصلة، ويتم الوصول إلى الذاكرة فقط من خلال تعليمات تحميل وتخزين صريحة."
    },
    {
      question: "ما هو نوع آلة x86؟",
      options: [
        "آلة تحميل/تخزين ذات 3 عناوين",
        "آلة ذاكرة/ذاكرة ذات 2 عنوان",
        "آلة مكدس فقط",
        "آلة تجميع ذات 1 عنوان"
      ],
      correct: 1,
      explanation: "x86 هي آلة ذاكرة/ذاكرة ذات 2 عنوان، مما يعني أنها يمكن أن تنفذ عمليات مباشرة بين مواقع الذاكرة والسجلات، مع معامل واحد يعمل كمصدر ووجهة."
    },
    {
      question: "كيف يتم تعريف نوع البيانات في سياق ISA؟",
      options: [
        "أي تمثيل ثنائي",
        "تمثيل للمعلومات توجد له تعليمات تعمل على هذا التمثيل",
        "الأنواع الأولية فقط مثل الأعداد correctة",
        "تنسيق تخزين الذاكرة فقط"
      ],
      correct: 1,
      explanation: "يتم تعريف نوع البيانات على أنه تمثيل للمعلومات توجد له تعليمات تعمل على هذا التمثيل. لا يتعلق الأمر بتنسيق التخزين فقط، بل بدعم التعليمات."
    },
    {
      question: "أي مما يلي أمثلة على أنواع البيانات المذكورة؟",
      options: [
        "الأعداد correctة والنقطة العائمة فقط",
        "الأعداد correctة، النقطة العائمة، الحرف، الثنائي، العشري، BCD، القائمة المترابطة المزدوجة، قائمة الانتظار، السلسلة، المتجه البت، المكدس",
        "أنواع البيانات الأولية فقط",
        "الأنواع الرقمية فقط"
      ],
      correct: 1,
      explanation: "تذكر المحاضرة أنواع بيانات مختلفة: الأعداد correctة، النقطة العائمة، الحرف، الثنائي، العشري، BCD، القائمة المترابطة المزدوجة، قائمة الانتظار، السلسلة، المتجه البت، والمكدس - تتراوح من الأنواع الأولية إلى الأنواع المهيكلة المعقدة."
    },
    {
      question: "ما هو مثال لتعليمة نوع بيانات عالية المستوى من VAX؟",
      options: [
        "ADD و SUB فقط",
        "INSQUEUE (إدراج في قائمة الانتظار) و REMQUEUE (إزالة من قائمة الانتظار) على قوائم مترابطة مزدوجة",
        "التحميل والتخزين فقط",
        "العمليات الحسابية الأساسية"
      ],
      correct: 1,
      explanation: "قدمت VAX تعليمات عالية المستوى مثل INSQUEUE (إدراج في قائمة الانتظار) و REMQUEUE (إزالة من قائمة الانتظار) التي تعمل على قوائم مترابطة مزدوجة أو قوائم انتظار، و FINDFIRST لعمليات هيكل البيانات المعقدة."
    },
    {
      question: "ما الذي يشير إليه 'الفجوة الدلالية' في هندسة الكمبيوتر؟",
      options: [
        "المسافة المادية بين المكونات",
        "التفاوت بين مفاهيم البرامج عالية المستوى وعمليات الأجهزة منخفضة المستوى",
        "التأخير الزمني في تنفيذ التعليمات",
        "زمن انتقال الوصول إلى الذاكرة"
      ],
      correct: 1,
      explanation: "تشير الفجوة الدلالية إلى التفاوت بين المفاهيم والتجريدات عالية المستوى المستخدمة في برمجة البرامج والعمليات والآليات منخفضة المستوى المطبقة في الأجهزة."
    },
    {
      question: "كيف تختلف بنيات RISC المبكرة و Intel 432 من حيث الفجوة الدلالية؟",
      options: [
        "كلاهما له نفس النهج",
        "RISC المبكر: نوع بيانات عدد صحيح فقط (فجوة كبيرة)؛ Intel 432: نوع بيانات كائن، قائم على القدرات (فجوة صغيرة)",
        "كلاهما يركز على أنواع البيانات المعقدة",
        "كلاهما يستخدم الأنواع الأولية فقط"
      ],
      correct: 1,
      explanation: "كانت بنيات RISC المبكرة تحتوي على أنواع بيانات عدد صحيح فقط (مما أدى إلى فجوة دلالية كبيرة)، بينما دعمت Intel 432 أنواع بيانات الكائنات وكانت قائمة على القدرات (محاولة لسد الفجوة الدلالية بميزات عالية المستوى)."
    }
  ],
  'الفصل 7: المقايضات في ISA': [
    {
      question: "أي ISA قدم تعليمات مخصصة لعمليات القائمة المترابطة المزدوجة مثل INSQUEUE؟",
      options: ["x86", "VAX", "MIPS", "ARM"],
      correct: 1,
      explanation: "كان لدى VAX تعليمات متخصصة لعمليات قوائم الانتظار/القوائم، مما يعكس فلسفة تصميم CISC."
    },
    {
      question: "ما هو نوع البيانات الأساسي المدعوم في بنيات RISC المبكرة؟",
      options: ["نقطة عائمة", "عدد صحيح فقط", "مراجع الكائنات", "عشري مشفر ثنائيًا"],
      correct: 1,
      explanation: "دعمت تصميمات RISC المبكرة مثل MIPS الأعداد correctة فقط للحفاظ على البساطة."
    },
    {
      question: "توضح أنواع بيانات الكائنات في Intel 432 أي نوع من نهج الفجوة الدلالية؟",
      options: ["فجوة قصوى", "فجوة مصغرة", "لا فجوة", "فجوة متغيرة"],
      correct: 1,
      explanation: "هدفت Intel 432 إلى تقليل الفجوة من خلال دعم البنى عالية المستوى مباشرة في الأجهزة."
    },
    {
      question: "في نظام قابل للعنونة 32 بت مثل Alpha الأول، كيف يمكنك إضافة رقمين 32 بت؟",
      options: [
        "باستخدام تعليمات تحميل/تخزين 32 بت",
        "باستخدام تعليمة ADD واحدة 64 بت",
        "من خلال عمليات الذاكرة إلى الذاكرة",
        "باستخدام عمليات قابلة للعنونة بالبت"
      ],
      correct: 0,
      explanation: "يتطلب عمليات متعددة بسبب قيود العنونة 32 بت."
    },
    {
      question: "أي بنية تستخدم ترتيب البايت الكبير (big-endian)؟",
      options: ["x86", "PowerPC", "ARM (وضع little-endian)", "ناقل PCI الأصلي"],
      correct: 1,
      explanation: "تعد PowerPC و SPARC من البنيات الكبيرة البارزة."
    },
    {
      question: "في أنظمة little-endian، كيف تخزن القيمة 0x12345678 في العنوان A؟",
      options: [
        "A:12 A+1:34 A+2:56 A+3:78",
        "A:78 A+1:56 A+2:34 A+3:12",
        "A:56 A+1:78 A+2:12 A+3:34",
        "مقسمة عبر خطوط ذاكرة التخزين المؤقت"
      ],
      correct: 1,
      explanation: "يخزن little-endian البايت الأقل أهمية في أدنى عنوان."
    },
    {
      question: "ما هي خاصية البرامج التي تبرر وجود السجلات في ISA؟",
      options: [
        "التوطين المكاني",
        "توطين البيانات (زماني ومكاني)",
        "تأثير جدار الذاكرة",
        "عنق الزجاجة في فون نيومان"
      ],
      correct: 1,
      explanation: "تستغل السجلات التوطين الزماني (البيانات المعاد استخدامها) والتوطين المكاني (البيانات القريبة)."
    },
    {
      question: "كم عدد السجلات ذات الأغراض العامة التي قدمتها IA-64 (Itanium)؟",
      options: ["8", "16", "32", "128"],
      correct: 3,
      explanation: "توسعت IA-64 إلى 128 سجلًا للتوازي الصريح."
    },
    {
      question: "لماذا لا يستطيع المبرمجون الوصول مباشرة إلى سجلات خط الأنابيب؟",
      options: [
        "محمية بواسطة نظام التشغيل",
        "تمثل حالة البنية الدقيقة",
        "غير قابلة للوصول ماديًا",
        "تخالف حماية الذاكرة"
      ],
      correct: 1,
      explanation: "تعد سجلات خط الأنابيب جزءًا من البنية الدقيقة الخاصة بالتنفيذ."
    },
    {
      question: "أي فئة تعليمات تغير تسلسل التنفيذ؟",
      options: [
        "تعليمات التشغيل",
        "تعليمات نقل البيانات",
        "تعليمات تدفق التحكم",
        "تعليمات النقطة العائمة"
      ],
      correct: 2,
      explanation: "تعليمات تدفق التحكم (التفرعات/القفزات) تغير عداد البرنامج."
    },
    {
      question: "أي وضع عنونة يجمع بين سجل أساسي وسجل فهرس؟",
      options: [
        "الإزاحة",
        "التسجيل غير المباشر",
        "العنونة المفهرسة",
        "الذاكرة غير المباشرة"
      ],
      correct: 2,
      explanation: "تستخدم العنونة المفهرسة حساب الأساس + الفهرس."
    },
    {
      question: "ماذا يعني 'ISA المتعامد'؟",
      options: [
        "التعليمات تستخدم الزوايا القائمة فقط",
        "جميع التعليمات يمكنها استخدام جميع أوضاع العنونة",
        "محاذاة تعليمات ثابتة 90 درجة",
        "خطوط أنابيب منفصلة للأعداد correctة/النقطة العائمة"
      ],
      correct: 1,
      explanation: "التعامد يعني التجميع الموحد للعمليات وأوضاع العنونة."
    },
    {
      question: "ما هي الميزة الرئيسية للتعليمات ذات الطول المتغير؟",
      options: [
        "فك تشفير أجهزة أبسط",
        "كثافة كود أفضل",
        "سرعات ساعة أسرع",
        "سجلات أكثر"
      ],
      correct: 1,
      explanation: "يتيح الطول المتغير ترميزًا مدمجًا (مثل x86)."
    },
    {
      question: "أي حقل في تعليمات MIPS I-type يحمل القيمة الفورية؟",
      options: ["rs", "rt", "opcode", "حقل فوري 16 بت"],
      correct: 3,
      explanation: "يستخدم I-type قيمة فورية 16 بت للثوابت/الزوايا."
    },
    {
      question: "ما هو العيب الرئيسي لتعليمات CISC المعقدة؟",
      options: [
        "فرص تحسين محدودة للمترجم",
        "الكثير من السجلات",
        "ترميز ثابت الطول",
        "نقص دعم الذاكرة الافتراضية"
      ],
      correct: 0,
      explanation: "خلقت التعليمات المعقدة عمليات ذات مستوى تفصيلي كبير قيدت التحسينات."
    },
    {
      question: "أي تعليمات VAX وفرت الوصول إلى المصفوفات مع التحقق من الحدود؟",
      "خيارات": ["MOV", "INDEX", "BOUNDS", "ARRAY"],
      correct: 1,
      explanation: "تعليمات VAX INDEX كانت مثالاً على دعم لغة عالية المستوى."
    },
    {
      question: "أي خاصية ليست نموذجية لتصميمات RISC؟",
      options: [
        "أوضاع عنونة متعددة",
        "فك تشفير موحد",
        "تعليمات ثابتة الطول",
        "بنية تحميل/تخزين"
      ],
      correct: 0,
      explanation: "تقلل RISC من أوضاع العنونة من أجل البساطة."
    },
    {
      question: "ما الذي حفز بادئات تعليمات x86؟",
      options: [
        "التوافق مع الإصدارات السابقة",
        "فك تشفير أسرع",
        "سجلات أقل",
        "دعم big-endian"
      ],
      correct: 0,
      explanation: "سمحت البادئات بتوسيع ISA مع الحفاظ على التوافق."
    },
    {
      question: "ما الذي دفع تطور ISA وفقًا للفصل؟",
      options: [
        "قيود المترجم",
        "قيود الذاكرة",
        "احتياجات التخصص",
        "كل ما سبق"
      ],
      correct: 3,
      explanation: "كل هذه العوامل أثرت تاريخيًا على تصميم ISA."
    },
    {
      question: "كم عدد البايتات التي يمكن أن تشغلها بادئات تعليمات x86؟",
      options: ["0", "1", "حتى 4", "2 بالضبط"],
      correct: 2,
      explanation: "يسمح x86 بما يصل إلى أربع بادئات بايت واحد."
    },
    {
      question: "أي تنسيق تعليمات MIPS يحتوي على قيمة فورية 26 بت؟",
      options: ["R-type", "I-type", "J-type", "U-type"],
      correct: 2,
      explanation: "يستخدم J-type (القفز) قيمًا فورية 26 بت لأهداف العنوان."
    }
  ],
  'الفصل 8: البنية الدقيقة ذات الدورة الواحدة': [
    {
      question: "ما هو الغرض الأساسي من ذاكرة التخزين المؤقت؟",
      options: [
        "لتخزين جميع تعليمات البرنامج بشكل دائم",
        "لتخزين التعليمات النشطة/المستخدمة بشكل متكرر وتسريع المعالجة",
        "لاستبدال الذاكرة الرئيسية بالكامل",
        "لتخزين نتائج العمليات الحسابية فقط"
      ],
      correct: 1,
      explanation: "تقوم ذاكرة التخزين المؤقت بتخزين التعليمات النشطة أو المستخدمة بشكل متكرر مؤقتًا لتسريع المعالجة وتقليل الاختناقات بين ذاكرة الوصول العشوائي ووحدة المعالجة المركزية."
    },
    {
      question: "أثناء جزء الجلب من دورة التعليمات، ما هو دور ناقل العنوان؟",
      options: [
        "ينقل رمز تشغيل التعليمات إلى وحدة المنطق والحساب",
        "ينقل عنوان التعليمات إلى الذاكرة الرئيسية",
        "يخزن نتيجة التعليمات المنفذة",
        "يفك تشفير التعليمات لوحدة التحكم"
      ],
      correct: 1,
      explanation: "ينقل ناقل العنوان عنوان الذاكرة للتعليمات المراد جلبها من الذاكرة الرئيسية إلى وحدة المعالجة المركزية."
    },
    {
      question: "أي مما يلي هو عيب لسرعات الساعة الأعلى في وحدات المعالجة المركزية؟",
      options: [
        "يمكن تنفيذ عدد أقل من التعليمات في الثانية",
        "قد ترتفع درجة حرارة وحدة المعالجة المركزية وتتطلب المزيد من التبريد",
        "تعمل البرامج بشكل أبطأ بسبب زيادة التعقيد",
        "يتم تقليل عرض ناقل البيانات"
      ],
      correct: 1,
      explanation: "تزيد سرعات الساعة الأعلى من استهلاك الطاقة وتوليد الحرارة، مما قد يتسبب في ارتفاع درجة الحرارة ويتطلب حلول تبريد إضافية."
    },
    {
      question: "في بنية دقيقة ذات دورة واحدة، كم عدد دورات الساعة التي تستغرقها كل تعليمة للتنفيذ؟",
      options: [
        "دورة واحدة",
        "دورتين",
        "دورات متغيرة حسب التعليمات",
        "ست دورات (واحدة لكل مرحلة)"
      ],
      correct: 0,
      explanation: "في بنية دقيقة ذات دورة واحدة، يتم إكمال جميع مراحل التعليمات (الجلب، فك التشفير، التنفيذ، إلخ) ضمن دورة ساعة واحدة."
    },
    {
      question: "ما الذي يحدد وقت دورة الساعة في بنية دقيقة ذات دورة واحدة؟",
      options: [
        "أسرع تعليمة",
        "متوسط زمن انتقال التعليمات",
        "أبطأ تعليمة",
        "عدد الوحدات الوظيفية"
      ],
      correct: 2,
      explanation: "تحدد أبطأ تعليمة وقت دورة الساعة لأن جميع التعليمات يجب أن تكتمل ضمن دورة واحدة."
    }
  ],
  'الفصل 9: البنية الدقيقة متعددة الدورات والخطية': [
    {
      question: "كيف تختلف البنية الدقيقة متعددة الدورات عن تصميم الدورة الواحدة؟",
      options: [
        "تستغرق التعليمات دائمًا دورات أقل لإكمالها",
        "قد تمتد كل مرحلة من دورة التعليمات على عدة دورات ساعة",
        "تلغي الحاجة إلى وحدة تحكم",
        "تستخدم ناقل بيانات أصغر"
      ],
      correct: 1,
      explanation: "في بنية دقيقة متعددة الدورات، يمكن أن تستغرق كل مرحلة (الجلب، فك التشفير، إلخ) عدة دورات ساعة، مما يسمح بأوقات دورة أقصر."
    },
    {
      question: "ما هي الميزة الرئيسية للآلات متعددة الدورات على الآلات ذات الدورة الواحدة؟",
      options: [
        "تحدد أبطأ تعليمة وقت الدورة",
        "وقت دورة الساعة أقصر لأنه يعتمد على أبطأ مرحلة، وليس التعليمات",
        "لا تتطلب إشارات تحكم",
        "جميع التعليمات تنفذ بالتوازي"
      ],
      correct: 1,
      explanation: "تقوم الآلات متعددة الدورات بتقسيم التعليمات إلى مراحل، مما يسمح بتحديد وقت دورة الساعة بواسطة أبطأ مرحلة بدلاً من أبطأ تعليمة."
    },
    {
      question: "أي مكون يولد إشارات التحكم لتنسيق مسار البيانات في معالجة التعليمات؟",
      "خيارات": [
        "ALU",
        "ذاكرة التخزين المؤقت",
        "منطق التحكم",
        "ناقل العنوان"
      ],
      correct: 2,
      explanation: "يفك تشفير منطق التحكم التعليمات ويولد إشارات لتوجيه مسار البيانات (مثل ALU، السجلات) حول كيفية معالجة البيانات."
    },
    {
      question: "ماذا يحدث لعداد البرنامج (PC) أثناء مرحلة الجلب؟",
      options: [
        "يتم إعادة تعيينه إلى الصفر",
        "يتم زيادته ليشير إلى التعليمات التالية",
        "يخزن نتيجة عملية ALU",
        "يحتفظ برمز التشغيل لفك التشفير"
      ],
      correct: 1,
      explanation: "بعد جلب التعليمات، يتم زيادة عداد البرنامج ليشير إلى التعليمات التالية في الذاكرة."
    },
    {
      question: "أي مما يلي صحيح حول مرحلة التنفيذ؟",
      options: [
        "تسترد التعليمات من الذاكرة الرئيسية",
        "تفك تشفير رمز التشغيل إلى إشارات تحكم",
        "تنفذ العملية الفعلية (مثل حساب ALU)",
        "تخزن النتيجة في سجل التعليمات"
      ],
      correct: 2,
      explanation: "تنفذ مرحلة التنفيذ العملية المحددة بواسطة التعليمات، مثل العمليات الحسابية في ALU أو نقل البيانات."
    }
  ],
  'الفصل 10: مقدمة في البنية الدقيقة': [
    {
      question: "ما هي السمة الرئيسية للبنية الدقيقة ذات الدورة الواحدة؟",
      options: [
        "تكمل جميع التعليمات التنفيذ في دورة ساعة واحدة",
        "يتم تقسيم التعليمات على عدة دورات",
        "فقط تعليمات الحساب تستخدم دورة واحدة",
        "يستغرق الوصول إلى الذاكرة دورات متغيرة حسب زمن الوصول"
      ],
      correct: 0,
      explanation: "في البنية الدقيقة ذات الدورة الواحدة، تكمل كل تعليمة (مثل ALU، تحميل/تخزين) جميع المراحل (الجلب، فك التشفير، التنفيذ، إلخ) ضمن دورة ساعة واحدة."
    },
    {
      question: "أي مكون مسؤول عن الاحتفاظ بعنوان التعليمات الحالية في مسار البيانات ذي الدورة الواحدة؟",
      options: [
        "ملف السجل",
        "عداد البرنامج (PC)",
        "ALU",
        "ذاكرة البيانات"
      ],
      correct: 1,
      explanation: "يخزن عداد البرنامج (PC) عنوان التعليمات الحالية التي يتم تنفيذها ويزداد بمقدار 4 (لـ MIPS) بعد كل جلب."
    },
    {
      question: "ما هو دور وحدة 'تمديد الإشارة' في مسار البيانات؟",
      options: [
        "لتحويل القيم الفورية ذات 16 بت إلى قيم موقعة 32 بت",
        "لإجراء عمليات حسابية",
        "للاختيار بين سجل أو معاملات فورية",
        "لإدارة عناوين الذاكرة"
      ],
      correct: 0,
      explanation: "تقوم وحدة تمديد الإشارة بتوسيع القيم الفورية ذات 16 بت (على سبيل المثال، في تعليمات I-type) إلى 32 بت مع الحفاظ على الإشارة لعمليات حسابية صحيحة."
    },
    {
      question: "أي إشارة تحكم تحدد ما إذا كانت ALU تستخدم قيمة سجل أو قيمة فورية كمعاملها الثاني؟",
      options: [
        "RegWrite",
        "ALUSrc",
        "MemtoReg",
        "Branch"
      ],
      correct: 1,
      explanation: "تختار ALUSrc بين معامل السجل الثاني (على سبيل المثال، لـ R-type) أو قيمة فورية ممتدة الإشارة (على سبيل المثال، لـ ADDI/LW/SW)."
    },
    {
      question: "ماذا يحدث أثناء مرحلة 'MEM' لتعليمات LW؟",
      options: [
        "تحسب ALU عنوان الذاكرة الفعلي",
        "يتم قراءة البيانات من الذاكرة وكتابتها في سجل",
        "يتم جلب التعليمات من الذاكرة",
        "يتم تحديث PC"
      ],
      correct: 1,
      explanation: "في مرحلة MEM، يتم الوصول إلى ذاكرة البيانات باستخدام العنوان المحسوب في EX، ويتم كتابة النتيجة لاحقًا إلى سجل في WB."
    },
    {
      question: "أي نوع تعليمات يتطلب إشارة التحكم 'RegDst' لتحديد سجل الوجهة من البتات [15:11]؟",
      options: [
        "I-type (على سبيل المثال، ADDI)",
        "R-type (على سبيل المثال، ADD)",
        "Load (على سبيل المثال، LW)",
        "Store (على سبيل المثال، SW)"
      ],
      correct: 1,
      explanation: "تستخدم تعليمات R-type البتات [15:11] لسجل الوجهة (rd)، بينما تستخدم I-type (على سبيل المثال، ADDI/LW) البتات [20:16] (rt)."
    },
    {
      question: "لماذا تصميم الدورة الواحدة غير فعال للتطبيقات الواقعية؟",
      options: [
        "لا يمكنه التعامل مع تعليمات التفرع",
        "يجب أن تستوعب دورة الساعة أبطأ تعليمة (على سبيل المثال، LW)",
        "يفتقر إلى ملف سجل",
        "وصول الذاكرة غير متزامن"
      ],
      correct: 1,
      explanation: "يتم تحديد طول دورة الساعة بواسطة أبطأ تعليمة (مثل LW، التي تستخدم الوصول إلى الذاكرة)، مما يجعل التعليمات الأسرع (مثل ADD) بطيئة بشكل غير ضروري."
    },
    {
      question: "ما هو الغرض من مضاعف 'MemtoReg' في مسار البيانات؟",
      options: [
        "للاختيار بين نتيجة ALU أو بيانات الذاكرة للكتابة الخلفية إلى السجل",
        "للاختيار بين معاملات السجل",
        "لتمديد القيم الفورية",
        "لحساب أهداف التفرع"
      ],
      correct: 0,
      explanation: "تختار MemtoReg ما إذا كانت بيانات الكتابة الخلفية تأتي من نتيجة ALU (على سبيل المثال، لـ ADD) أو الذاكرة (على سبيل المثال، لـ LW)."
    }
  ],
  
  'عام 1': [
    {
      "question": "مستوى RAID رقم ___ لديه أعلى استهلاك للقرص (disk overhead) بين جميع أنواع RAID.",
      "options": [
        "0",
        "1",
        "3",
        "5"
      ],
      "correct": 1,
      "explanation": "يقوم RAID 1 (mirroring) بمضاعفة جميع البيانات، مما يعني أنه يتطلب ضعف مساحة القرص لنفس كمية البيانات، وبالتالي فإن لديه أعلى استهلاك للقرص."
    },
    {
      "question": "يمكن دمج أو محاكاة (virtualized) مصفوفات الأقراص في ____.",
      "options": [
        "RAID",
        "NAS",
        "SAN",
        "SAS"
      ],
      "correct": 2,
      "explanation": "توفر شبكة منطقة التخزين (Storage Area Network - SAN) تخزينًا على مستوى الكتل (block-level storage) وتسمح بدمج ومحاكاة مصفوفات الأقراص عبر خوادم متعددة."
    },
    {
      "question": "ما هو الحد الأدنى لعدد الأقراص المطلوبة لـ RAID 1؟ ___.",
      "options": [
        "1",
        "2",
        "4",
        "5"
      ],
      "correct": 1,
      "explanation": "يتضمن RAID 1 تقنية النسخ المتطابق (mirroring)، مما يعني أن البيانات يتم تكرارها عبر قرصين أو أكثر. ولذلك، يلزم وجود قرصين كحد أدنى."
    },
    {
      "question": "تم تصميم الـ ______ لتوفير مجموعة تعليمات قوية ومرنة ضمن قيود كمبيوتر مصغر 16 بت (16-bit minicomputer).",
      "options": [
        "PDP-10",
        "PDP-11",
        "VAX",
        "ARM"
      ],
      "correct": 1,
      "explanation": "كان PDP-11 جهاز كمبيوتر مصغر 16 بت مؤثرًا للغاية تم تطويره بواسطة Digital Equipment Corporation (DEC) ومعروف بمجموعة تعليماته المرنة والقوية."
    },
    {
      "question": "تجسّر الـ Cache الفجوة في السرعة بين ______ و ______.",
      "options": [
        "RAM و ROM",
        "Processor و RAM",
        "RAM و Secondary memory",
        "None of the mentioned"
      ],
      "correct": 1,
      "explanation": "ذاكرة التخزين المؤقت (Cache memory) هي ذاكرة صغيرة وسريعة تخزن البيانات والتعليمات المستخدمة بشكل متكرر، مما يقلل من الوقت الذي يحتاجه المعالج لانتظار البيانات من ذاكرة الوصول العشوائي (RAM) الرئيسية الأبطأ."
    },
    {
      "question": "الـ ______ هو جزء الكمبيوتر الذي يقوم بتسلسل وتنفيذ التعليمات.",
      "options": [
        "CPU",
        "memory",
        "bus",
        "input/output devices"
      ],
      "correct": 0,
      "explanation": "وحدة المعالجة المركزية (CPU) هي 'عقل' الكمبيوتر، وهي مسؤولة عن جلب التعليمات وفك تشفيرها وتنفيذها، بالإضافة إلى إجراء العمليات الحسابية والمنطقية."
    },
    {
      "question": "تسمى الشبكة عالية السرعة ذات الغرض الخاص التي تدمج أنواعًا مختلفة من أجهزة تخزين البيانات في نظام تخزين واحد وتربطها بموارد الحوسبة عبر مؤسسة بأكملها بـ ______.",
      "options": [
        "network-attached storage",
        "storage area network",
        "storage as a service",
        "enterprise data storage solution"
      ],
      "correct": 1,
      "explanation": "شبكة منطقة التخزين (Storage Area Network - SAN) هي شبكة مخصصة عالية السرعة توفر الوصول إلى تخزين بيانات موحد على مستوى الكتل (block-level)."
    },
    {
      "question": "Load/store architecture: تعليمات التشغيل تعمل فقط على ______.",
      "options": [
        "Memory",
        "Register",
        "immediate",
        "register indirect"
      ],
      "correct": 1,
      "explanation": "في معماريات load/store (مثل RISC)، تعمل العمليات الحسابية والمنطقية فقط على البيانات الموجودة بالفعل في سجلات المعالج (processor registers). يجب تحميل البيانات صراحةً من الذاكرة إلى السجلات قبل العمليات، وتخزينها مرة أخرى في الذاكرة بعد ذلك."
    },
    {
      "question": "يُشار إلى استخدام معالجات متعددة على نفس الشريحة باسم ______ ويوفر إمكانية زيادة الأداء دون زيادة معدل الساعة (clock rate).",
      "options": [
        "multicore",
        "GPU",
        "data channels",
        "MPC"
      ],
      "correct": 0,
      "explanation": "تدمج المعالجات متعددة النوى (Multicore processors) وحدات معالجة مستقلة متعددة (cores) على شريحة واحدة، مما يسمح بالتنفيذ المتوازي للمهام وتحسين الأداء دون الاعتماد فقط على سرعات ساعة أعلى."
    },
    {
      "question": "يُسمى قياس عدد المهام التي يمكن لجهاز الكمبيوتر إنجازها في مقدار معين من الوقت بـ ______.",
      "options": [
        "throughput",
        "application analysis",
        "cycle speed",
        "real-time system"
      ],
      "correct": 0,
      "explanation": "يشير Throughput إلى المعدل الذي يقوم به النظام بمعالجة البيانات أو إكمال المهام. إنه مقياس لأداء النظام."
    },
    {
      "question": "يُستخدم لـ احتجاز التعليمات اليمنى مؤقتًا من كلمة في الذاكرة.",
      "options": [
        "MBR",
        "MAR",
        "IBR",
        "PC"
      ],
      "correct": 2,
      "explanation": "يُستخدم Instruction Buffer Register (IBR) في بعض المعماريات لاحتجاز التعليمات التالية المراد تنفيذها مؤقتًا، غالبًا عندما يتم جلب التعليمات في أزواج (على سبيل المثال، في أجهزة الكمبيوتر المبكرة مثل جهاز IAS)."
    },
    {
      "question": "يتكون الكمبيوتر من ______، وخلايا الذاكرة، والتوصيلات البينية بين هذه العناصر.",
      "options": [
        "circuits",
        "CPU",
        "gates",
        "chips"
      ],
      "correct": 3,
      "explanation": "يتكون الكمبيوتر أساسًا من البوابات (لمعالجة المنطق)، وخلايا الذاكرة (للتخزين)، والتوصيلات البينية بين هذه العناصر."
    },
    {
      "question": "يحدد العنوان في الذاكرة للكلمة المراد كتابتها من أو قراءتها في سجل عنوان الذاكرة. ___.",
      "options": [
        "MBR",
        "MAR",
        "IBR",
        "PC"
      ],
      "correct": 1,
      "explanation": "يحمل Memory Address Register (MAR) عنوان موقع الذاكرة الذي سيتم الوصول إليه (قراءته منه أو الكتابة إليه)."
    },
    {
      "question": "______ يدير موارد الكمبيوتر وينسق أداء أجزائه الوظيفية.",
      "options": [
        "Data Movement",
        "Control",
        "Data processing",
        "Data storage"
      ],
      "correct": 1,
      "explanation": "وحدة التحكم (جزء من الـ CPU) مسؤولة عن إدارة وتنسيق جميع مكونات نظام الكمبيوتر، وضمان تنفيذ التعليمات بشكل صحيح واستخدام الموارد بكفاءة."
    },
    {
      "question": "تُظهر عمليات تحديث كشف الحساب البنكي عمليات تتضمن ______.",
      "options": [
        "Data Movement",
        "Control",
        "Data processing",
        "Data storage"
      ],
      "correct": 2,
      "explanation": "يتضمن تحديث كشف الحساب البنكي إجراء حسابات (مثل إضافة الودائع، وطرح السحوبات) على البيانات المالية، وهو ما يندرج تحت معالجة البيانات (data processing)."
    },
    {
      "question": "الأنظمة المدمجة (Embedded Systems) لديها قيود شديدة على الموارد من حيث حجم معالج الذاكرة، والوقت، و ______.",
      "options": [
        "Power consumption",
        "Energy consumption",
        "speed",
        "cost"
      ],
      "correct": 0,
      "explanation": "تم تصميم الأنظمة المدمجة عادةً لوظائف محددة وغالبًا ما تعمل في بيئات يكون فيها استهلاك الطاقة عاملاً حاسمًا، مثل الأجهزة التي تعمل بالبطارية."
    },
    {
      "question": "نقل البيانات من جهاز طرفي أو خط اتصال إلى آخر هو ______.",
      "options": [
        "Data Movement",
        "Control",
        "Data processing",
        "Data storage"
      ],
      "correct": 0,
      "explanation": "يُشار إلى نقل البيانات بين المكونات المختلفة لنظام الكمبيوتر (مثل من جهاز إدخال إلى الذاكرة، أو من الذاكرة إلى جهاز إخراج) باسم نقل البيانات (data movement)."
    },
    {
      "question": "______ يتكون من عدد من الأسلاك الموصلة التي تتصل بها جميع المكونات الأخرى.",
      "options": [
        "System bus",
        "memory",
        "CPU",
        "I/O"
      ],
      "correct": 0,
      "explanation": "الـ System bus هو مجموعة من الأسلاك المتوازية التي توفر مسار اتصال بين الـ CPU والذاكرة وأجهزة الإدخال/الإخراج."
    },
    {
      "question": "إذا كان النظام جهازًا 64 بت (64-bit machine)، فإن طول كل كلمة سيكون ______.",
      "options": [
        "4 bytes",
        "8 bytes",
        "16 bytes",
        "32 bytes"
      ],
      "correct": 1,
      "explanation": "يعني جهاز 64 بت أن حجم كلمته هو 64 بت. نظرًا لأن 1 بايت = 8 بت، فإن 64 بت تساوي 64/8 = 8 بايت."
    },
    {
      "question": "معالجات الـ ______ عرضة لفئة جديدة من هجمات حجب الخدمة (Denial of Service - DoS) لأن نظام الذاكرة يتم مشاركته 'بشكل غير عادل' بين النوى المتعددة (multiple cores).",
      "options": [
        "single-core",
        "multi-core",
        "super scalar",
        "dual core"
      ],
      "correct": 1,
      "explanation": "في المعالجات متعددة النوى (multicore processors)، إذا لم يتم إدارة الوصول إلى الذاكرة بشكل عادل بين النوى، يمكن لعملية ضارة على نواة واحدة أن تحتكر الوصول إلى الذاكرة، مما يؤدي إلى حجب الخدمة (denial-of-service) للنوى الأخرى."
    },
    {
      "question": "في معظم الأنظمة المعاصرة، تُستخدم القطاعات ذات الطول الثابت (fixed-length sectors)، مع كون ______ بايت هو الحجم العالمي للقطاع تقريبًا.",
      "options": [
        "512",
        "265",
        "128",
        "64"
      ],
      "correct": 0,
      "explanation": "512 بايت هو حجم القطاع القياسي التاريخي والذي لا يزال مستخدمًا على نطاق واسع لمحركات الأقراص الصلبة وأجهزة التخزين الأخرى."
    },
    {
      "question": "______ هو مثال يطبق ISA متعامد (orthogonal ISA).",
      "options": [
        "VAX",
        "ARM",
        "MIPS",
        "X86"
      ],
      "correct": 0,
      "explanation": "غالبًا ما تُعتبر معمارية VAX مثالاً على مجموعة تعليمات متعامدة (orthogonal instruction set architecture)، حيث يمكن استخدام أي وضع عنونة (addressing mode) مع أي تعليمة."
    },
    {
      "question": "جهاز الربط البيني لمكون SAN مثل ______.",
      "options": [
        "Storage arrays",
        "switches",
        "management software",
        "cables"
      ],
      "correct": 1,
      "explanation": "المفاتيح (switches) (على سبيل المثال، Fibre Channel switches) هي أجهزة ربط بيني رئيسية في شبكة SAN، مما يسمح لعدة خوادم بالاتصال بأجهزة تخزين متعددة."
    },
    {
      "question": "تُعبر الـ ______ عن العمليات في شكل جبري موجز باستخدام المتغيرات.",
      "options": [
        "high-level language",
        "opcode",
        "machine language",
        "register"
      ],
      "correct": 0,
      "explanation": "تستخدم لغات البرمجة عالية المستوى (مثل Python، Java، C++) صيغة أكثر تجريدًا وأقرب إلى اللغة البشرية، مما يسمح للمبرمجين بالتعبير عن العمليات باستخدام المتغيرات والأشكال الجبرية."
    },
    {
      "question": "معمارية ARM فقط تعليمات الـ ______ تصل إلى مواقع الذاكرة.",
      "options": [
        "data processing",
        "status register access",
        "load and store",
        "branch"
      ],
      "correct": 2,
      "explanation": "ARM هي معمارية RISC، وتلتزم بمبدأ load/store حيث تتفاعل فقط تعليمات load و store الصريحة مع الذاكرة. يتم تنفيذ جميع العمليات الأخرى على السجلات."
    },
    {
      "question": "وحدة رأس مكون NAS هي ______.",
      "options": [
        "CPU",
        "NIC",
        "Protocols",
        "SCSI"
      ],
      "correct": 1,
      "explanation": "تشتمل وحدة الرأس في جهاز التخزين المتصل بالشبكة (Network Attached Storage - NAS) عادةً على بطاقة واجهة الشبكة (NIC) للاتصال بالشبكة وخدمة الملفات."
    },
    {
      "question": "______ طبقات متعددة من الذاكرة بين المعالج والذاكرة الرئيسية.",
      "options": [
        "Cache Memory",
        "Controller",
        "RAM",
        "CPU"
      ],
      "correct": 0,
      "explanation": "ذاكرة التخزين المؤقت (Cache memory) منظمة في تسلسل هرمي (L1, L2, L3) لتوفير وصول أسرع للبيانات المستخدمة بشكل متكرر، مما يسد فجوة السرعة بين المعالج والذاكرة الرئيسية."
    },
    {
      "question": "______ يحتوي على كلمة ليتم تخزينها في الذاكرة أو إرسالها إلى وحدة الإدخال/الإخراج.",
      "options": [
        "Memory buffer register",
        "Memory address register",
        "Instruction register",
        "Instruction buffer register"
      ],
      "correct": 0,
      "explanation": "يحتوي سجل المخزن المؤقت للذاكرة (Memory Buffer Register - MBR)، المعروف أيضًا باسم سجل بيانات الذاكرة (Memory Data Register - MDR)، مؤقتًا على البيانات التي يتم كتابتها إلى الذاكرة أو قراءتها منها."
    },
    {
      "question": "يتم تخزين التعليمات المفككة في ______.",
      "options": [
        "Register",
        "PC",
        "IR",
        "MDR"
      ],
      "correct": 2,
      "explanation": "بعد جلب التعليمات وفك تشفيرها بواسطة وحدة التحكم، يتم تخزينها في سجل التعليمات (Instruction Register - IR) للتنفيذ."
    },
    {
      "question": "يحتاج المستوى الأعلى فقط إلى معرفة الواجهة للمستوى الأدنى، وليس كيفية تنفيذ المستوى الأدنى يشير إلى ______.",
      "options": [
        "ISA",
        "Microarchitecture",
        "Abstraction",
        "Purpose of computing"
      ],
      "correct": 2,
      "explanation": "يعني التجريد (Abstraction) في علوم الكمبيوتر إخفاء التفاصيل المعقدة لكيفية عمل شيء ما وكشف الواجهة الضرورية فقط، مما يسمح لمستويات مختلفة من النظام بالتفاعل دون الحاجة إلى فهم التنفيذ الكامل للمستوى الأدنى."
    },
    {
      "question": "تباطؤات غير متوقعة في المعالجات متعددة النوى (Multi-core) بسبب ______.",
      "options": [
        "L2 cash",
        "L3 cash",
        "Dram controller",
        "Row buffer"
      ],
      "correct": 2,
      "explanation": "يلعب متحكم الـ DRAM دورًا حاسمًا في إدارة الوصول إلى الذاكرة للمعالجات متعددة النوى. يمكن أن يؤدي الجدولة غير الفعالة أو غير العادلة بواسطة متحكم الـ DRAM إلى تباطؤات غير متوقعة وتدهور الأداء لبعض النوى."
    },
    {
      "question": "يعيد متحكم الـ DRAM ترتيب طلبات التدفقات إلى الصف المفتوح (open row) على حساب الطلبات الأخرى (حتى الأقدم منها) من أجل ______ إنتاجية الـ DRAM.",
      "options": [
        "maximize",
        "minimize",
        "equalize",
        "optimization"
      ],
      "correct": 0,
      "explanation": "غالبًا ما تستخدم متحكمات الـ DRAM تقنيات إدارة المخزن المؤقت للصفوف (row buffer management) لزيادة الإنتاجية إلى أقصى حد عن طريق إعطاء الأولوية للوصول إلى الصفوف المفتوحة حاليًا، مما يقلل من وقت الاستجابة ويحسن الأداء العام للذاكرة."
    },
    {
      "question": "بنك الـ DRAM غير متاح أثناء التحديث (refresh) يشير إلى ______.",
      "options": [
        "Energy consumption",
        "Performance degradation",
        "QoS/impact",
        "DRAM capacity scaling"
      ],
      "correct": 1,
      "explanation": "تتطلب ذاكرة الـ DRAM تحديثًا دوريًا للحفاظ على البيانات. خلال دورات التحديث، يكون بنك الـ DRAM غير متاح للقراءة أو الكتابة، مما قد يؤدي إلى تدهور مؤقت في الأداء."
    },
    {
      "question": "في حالة طريقة تعليمات العنوان الصفري (Zero-address instruction method)، يتم تخزين المعاملات (operands) في ______.",
      "options": [
        "Registers",
        "Accumulators",
        "Push down stack",
        "Cache"
      ],
      "correct": 2,
      "explanation": "تعمل مجموعات تعليمات العنوان الصفري (Zero-address instruction sets) على الـ stack. يتم أخذ المعاملات ضمنيًا من أعلى الـ stack، ويتم دفع النتائج مرة أخرى إلى الـ stack."
    },
    {
      "question": "وضع العنونة (addressing mode)، حيث تحدد قيمة المعامل (operand value) مباشرة هو ______.",
      "options": [
        "Immediate",
        "Direct",
        "Definite",
        "Relative"
      ],
      "correct": 0,
      "explanation": "يعني وضع العنونة الفوري (Immediate addressing mode) أن المعامل نفسه يتم تضمينه كجزء من التعليمات، بدلاً من عنوان يمكن العثور على المعامل فيه."
    },
    {
      "question": "تعمل ذاكرة الـ Cache بين ______ و ______.",
      "options": [
        "CPU and RAM",
        "RAM and ROM",
        "CPU and Hard Disk",
        "None of these"
      ],
      "correct": 0,
      "explanation": "تتم وضع ذاكرة الـ Cache هرميًا بين الـ CPU السريع وذاكرة الوصول العشوائي (RAM) الرئيسية الأبطأ لتقليل متوسط وقت الوصول إلى الذاكرة."
    },
    {
      "question": "الـ CISC يرمز إلى ______.",
      "options": [
        "Computer Instruction Set Compliment",
        "Complete Instruction Set Compliment",
        "Computer Indexed Set Components",
        "Complex Instruction Set Computer"
      ],
      "correct": 3,
      "explanation": "CISC ترمز إلى Complex Instruction Set Computer (كمبيوتر مجموعة التعليمات المعقدة)، وتتميز بمجموعة كبيرة ومتنوعة من التعليمات، بعضها يمكنه تنفيذ عمليات معقدة في تعليمة واحدة."
    },
    {
      "question": "معمارية الكمبيوتر التي تهدف إلى تقليل وقت تنفيذ التعليمات هي ______.",
      "options": [
        "CISC",
        "RISC",
        "ISA",
        "ANNA"
      ],
      "correct": 1,
      "explanation": "تهدف معماريات RISC (Reduced Instruction Set Computer) إلى التنفيذ الأسرع باستخدام مجموعة أصغر وأبسط وأكثر تحسينًا من التعليمات، غالبًا ما يتم تنفيذها في دورة ساعة واحدة."
    },
    {
      "question": "تم تطوير كل من معماريات CISC و RISC لتقليل الـ ______.",
      "options": [
        "Cost",
        "Time delay",
        "Semantic gap",
        "All of the mentioned"
      ],
      "correct": 2,
      "explanation": "تشير الفجوة الدلالية (semantic gap) إلى الفرق في القوة التعبيرية بين لغات البرمجة عالية المستوى ولغة الآلة الأساسية. يهدف كل من CISC و RISC إلى سد هذه الفجوة، وإن كان ذلك من خلال مقاربات مختلفة."
    },
    {
      "question": "في معمارية CISC، يتم تخزين معظم التعليمات المعقدة في ______.",
      "options": [
        "Register",
        "Diodes",
        "CMOS",
        "Transistors"
      ],
      "correct": 3,
      "explanation": "يتم تنفيذ التعليمات المعقدة في معماريات CISC باستخدام microcode، والذي يتم تخزينه عادةً في ذاكرة التحكم داخل وحدة التحكم في الـ CPU، ويتكون من الترانزستورات."
    },
    {
      "question": "أي من المعماريات هي الأكثر كفاءة في استهلاك الطاقة؟ ______.",
      "options": [
        "CISC",
        "RISC",
        "ISA",
        "IANA"
      ],
      "correct": 1,
      "explanation": "تميل معماريات RISC، ذات مجموعات التعليمات الأبسط، إلى أن تكون أكثر كفاءة في استهلاك الطاقة نظرًا لمتطلبات الأجهزة الأقل تعقيدًا واستخدام عدد أقل من الترانزستورات في تصميم الـ CPU."
    },
    {
      "question": "إنتاجية المعالج الفائق التوازي (super scalar processor) هي ______.",
      "options": [
        "less than 1",
        "1",
        "more than 1",
        "not known"
      ],
      "correct": 2,
      "explanation": "يمكن للمعالج الفائق التوازي (superscalar processor) تنفيذ أكثر من تعليمة واحدة في دورة ساعة واحدة عن طريق استخدام وحدات تنفيذ متعددة بالتوازي، وبالتالي فإن لديه إنتاجية أكبر من 1."
    },
    {
      "question": "عندما يقوم المعالج بتنفيذ تعليمات متعددة في وقت واحد، يُقال إنه يستخدم ______.",
      "options": [
        "Single issue",
        "Multiplicity",
        "Visualization",
        "Multiple issues"
      ],
      "correct": 3,
      "explanation": "يشير Multiple issues إلى قدرة المعالج على جلب وتنفيذ تعليمات متعددة في وقت واحد في دورة ساعة واحدة، وهي سمة من سمات معماريات superscalar و VLIW."
    },
    {
      "question": "يلعب الـ ______ دورًا حيويًا جدًا في حالة المعالجات فائقة التوازي (super scalar processors).",
      "options": [
        "Compilers",
        "Motherboard",
        "Memory",
        "Peripherals"
      ],
      "correct": 0,
      "explanation": "تعتبر المترجمات (Compilers) حاسمة بالنسبة للمعالجات فائقة التوازي لأنها تحسن تدفق التعليمات لتحديد التعليمات المستقلة التي يمكن تنفيذها بالتوازي، مما يستغل وحدات التنفيذ المتعددة بالكامل."
    },
    {
      "question": "الكمبيوتر المنظم على أساس الـ Stack لديه تعليمات بعنوان ______.",
      "options": [
        "3",
        "2",
        "1",
        "0"
      ],
      "correct": 3,
      "explanation": "تستخدم أجهزة الكمبيوتر المنظمة على أساس الـ Stack تعليمات ذات عنوان صفري (zero-address instructions) لأن المعاملات يتم إخراجها ضمنيًا من أعلى الـ Stack، ويتم دفع النتائج مرة أخرى إلى الـ Stack."
    },
    {
      "question": "يتم توصيل محرك القرص بالنظام باستخدام الـ ______.",
      "options": [
        "PCI bus",
        "SCSI bus",
        "HDMI",
        "ISA"
      ],
      "correct": 1,
      "explanation": "SCSI (Small Computer System Interface) هو معيار لربط ونقل البيانات بين أجهزة الكمبيوتر والأجهزة الطرفية، بما في ذلك محركات الأقراص. على الرغم من وجود ناقلات أخرى، إلا أن SCSI كان يستخدم على نطاق واسع لهذا الغرض."
    },
    {
      "question": "ARM يرمز إلى ______.",
      "options": [
        "Advanced Rate Machines",
        "Advanced RISC Machines",
        "Artificial Running Machines",
        "Aviary Running Machines"
      ],
      "correct": 1,
      "explanation": "ARM تعني Advanced RISC Machines، مما يعكس أصلها كمعمارية RISC (Reduced Instruction Set Computer)."
    },
    {
      "question": "الأهمية الرئيسية لمعالجات ARM الدقيقة هي توفير التشغيل بـ ______.",
      "options": [
        "Low cost and low power consumption",
        "Higher degree of multi-tasking",
        "Lower error or glitches",
        "Efficient memory management"
      ],
      "correct": 0,
      "explanation": "تشتهر معالجات ARM على نطاق واسع بكفاءتها، مما يتيح تكلفة منخفضة واستهلاك طاقة منخفض، مما يجعلها مثالية للأجهزة المحمولة والمدمجة."
    },
    {
      "question": "تم تصميم معالجات ARM في الأساس لـ ______.",
      "options": [
        "Main frame systems",
        "Distributed systems",
        "Mobile systems",
        "Super computers"
      ],
      "correct": 2,
      "explanation": "تم تصميم معالجات ARM في البداية للأنظمة المحمولة والمدمجة، حيث تعتبر كفاءة الطاقة وصغر الحجم أمرًا بالغ الأهمية."
    },
    {
      "question": "في ARM، يتم تنفيذ الـ PC باستخدام ______.",
      "options": [
        "Caches",
        "Heaps",
        "General purpose register",
        "Stack"
      ],
      "correct": 2,
      "explanation": "في معمارية ARM، عادة ما يكون Program Counter (PC) أحد السجلات ذات الأغراض العامة (على وجه التحديد R15)، مما يسمح بالتعامل والعنونة بكفاءة."
    },
    {
      "question": "التعليمات، ADD R1, R2, R3 يتم فك تشفيرها على أنها ______.",
      "options": [
        "R1<-[R1]+[R2]+[R3]",
        "R3<-[R1]+[R2]",
        "R3<-[R1]+[R2]+[R3]",
        "R1<-[R2]+[R3]"
      ],
      "correct": 3,
      "explanation": "في لغة تجميع ARM (والعديد من المعماريات الأخرى)، تأخذ تعليمة `ADD` عادة ثلاثة معاملات: سجل الوجهة، سجل المصدر الأول، وسجل المصدر الثاني. لذا، `ADD R1, R2, R3` تعني `R1 = R2 + R3`."
    },
    {
      "question": "______ يحول البرامج المكتوبة بلغة التجميع إلى تعليمات الآلة.",
      "options": [
        "Machine compiler",
        "Interpreter",
        "Assembler",
        "Converter"
      ],
      "correct": 2,
      "explanation": "الـ Assembler هو برنامج يترجم كود لغة التجميع إلى كود الآلة الذي يمكن لمعالج الكمبيوتر تنفيذه."
    },
    {
      "question": "التعليمات مثل MOV أو ADD تسمى ______.",
      "options": [
        "OP-Code",
        "Operators",
        "Commands",
        "Operand"
      ],
      "correct": 0,
      "explanation": "MOV (move) و ADD (add) هي أمثلة على Operation Codes (Opcodes)، والتي تحدد العملية المراد تنفيذها بواسطة التعليمات."
    },
    {
      "question": "برنامج المصدر (source program) عادة ما يكون في ______.",
      "options": [
        "Assembly Language",
        "Machine Level Language",
        "High-level language",
        "Natural language"
      ],
      "correct": 2,
      "explanation": "عادة ما يكتب المبرمجون برامج المصدر بلغات عالية المستوى، والتي تكون أكثر قابلية للقراءة البشرية وأكثر تجريدًا من لغة التجميع أو لغة الآلة."
    },
    {
      "question": "ما الذي يستخدم لزيادة الحجم الظاهري للذاكرة الفعلية؟",
      "options": [
        "Disks",
        "Hard-disk",
        "Virtual memory",
        "Secondary memory"
      ],
      "correct": 2,
      "explanation": "الذاكرة الافتراضية (Virtual memory) هي تقنية لإدارة الذاكرة تسمح لنظام التشغيل بالتعويض عن نقص الذاكرة الفعلية عن طريق نقل البيانات مؤقتًا من ذاكرة الوصول العشوائي (RAM) إلى تخزين القرص."
    },
    {
      "question": "أثناء تنفيذ التعليمات، تُقرأ التعليمات في ______ في المعالج.",
      "options": [
        "Memory buffer register (MBR)",
        "Address register (AD)",
        "Instruction register (IR)",
        "Index register (IR)"
      ],
      "correct": 2,
      "explanation": "بعد الجلب، يتم تحميل التعليمات إلى سجل التعليمات (Instruction Register - IR) داخل الـ CPU لفك تشفيرها وتنفيذها."
    },
    {
      "question": "أي برنامج كمبيوتر يستخدم لتحويل البرنامج بأكمله إلى لغة الآلة في وقت واحد؟",
      "options": [
        "Simulator",
        "Compiler",
        "Interpreter",
        "Commander"
      ],
      "correct": 1,
      "explanation": "يقوم الـ Compiler بترجمة برنامج مصدر عالي المستوى بأكمله إلى كود الآلة قبل التنفيذ. بينما يقوم الـ Interpreter بالترجمة والتنفيذ سطرًا بسطر."
    },
    {
      "question": "تستخدم أجهزة الإدخال ______ لتخزين البيانات المستلمة.",
      "options": [
        "Primary Memory",
        "Secondary Memory",
        "Buffer",
        "External Memory"
      ],
      "correct": 2,
      "explanation": "غالبًا ما تستخدم أجهزة الإدخال المخازن المؤقتة (buffers) (مناطق تخزين مؤقتة) للاحتفاظ بالبيانات قبل معالجتها أو نقلها إلى الذاكرة الرئيسية، لإدارة فروق السرعة بين جهاز الإدخال والـ CPU."
    },
    {
      "question": "في معمارية RISC، يقتصر الوصول إلى الذاكرة على التعليمات: ______.",
      "options": [
        "MOV and IMP",
        "ST and LD",
        "PUSH and POP",
        "CALL and RET"
      ],
      "correct": 1,
      "explanation": "في RISC، يقتصر الوصول إلى الذاكرة على تعليمات load (LD) و store (ST) الصريحة. يتم تنفيذ جميع العمليات الأخرى على السجلات."
    },
    {
      "question": "معالجان A و B لهما ترددات ساعة 700 ميجاهرتز و 900 ميجاهرتز على التوالي. افترض أن A يمكنه تنفيذ تعليمة بمتوسط 3 خطوات وأن B يمكنه التنفيذ بمتوسط 5 خطوات. لتنفيذ نفس التعليمات، أي المعالجين أسرع؟",
      "options": [
        "A",
        "B",
        "Both take the same time",
        "Insufficient information"
      ],
      "correct": 0,
      "explanation": "لتحديد الأسرع، نحتاج إلى حساب الوقت لكل تعليمة لكل منهما: المعالج A: (1 / 700 ميجاهرتز) * 3 خطوات = 3 / 700 ميكروثانية ≈ 0.00428 ميكروثانية. المعالج B: (1 / 900 ميجاهرتز) * 5 خطوات = 5 / 900 ميكروثانية ≈ 0.00555 ميكروثانية. المعالج A يستغرق وقتًا أقل لكل تعليمة، لذا A أسرع."
    },
    {
      "question": "تُستخدم صيغة الـ ______ عادة لتخزين البيانات.",
      "options": [
        "BCD",
        "Decimal",
        "Hexadecimal",
        "Octal"
      ],
      "correct": 0,
      "explanation": "BCD (Binary-Coded Decimal) هي صيغة شائعة تُستخدم لتخزين الأرقام العشرية في شكل ثنائي، خاصة في التطبيقات التي تكون فيها الحسابات العشرية الدقيقة حاسمة."
    }
  ],

  "عام 2": [
    {
      "question": "تستخدم متحكمات الـ DRAM بشكل شائع سياسة الجدولة (FR-FCFS).",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "تستخدم متحكمات الـ DRAM عادةً سياسة الجدولة FR-FCFS (First-Ready, First-Come-First-Serve) لتحسين الوصول إلى الذاكرة عن طريق إعطاء الأولوية للطلبات على الصفوف المفتوحة بالفعل."
    },
    {
      "question": "الـ Processor هو مكون الكمبيوتر الذي يفسر التعليمات وينفذها.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "المعالج (CPU) هو المكون الأساسي المسؤول عن جلب التعليمات وفك تشفيرها وتنفيذها في نظام الكمبيوتر."
    },
    {
      "question": "يتضمن Alpha ISA نوع بيانات قائمة مزدوجة الترابط (doubly linked list).",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 1,
      "explanation": "لا يتضمن Alpha ISA (Instruction Set Architecture) بشكل أساسي نوع بيانات قائمة مزدوجة الترابط؛ فهو يوفر تعليمات أساسية لمعالجة البيانات، ولكن يتم تنفيذ هياكل البيانات المعقدة في الـ software."
    },
    {
      "question": "الـ CPU interconnection هي آلية توفر الاتصال بين الـ CPU، الذاكرة الرئيسية (main memory)، والـ I/O.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "تتيح وصلات الـ CPU البينية (مثل الـ buses أو الروابط من نقطة إلى نقطة) الاتصال بين الـ CPU والذاكرة وأجهزة الإدخال/الإخراج لنقل البيانات وإشارات التحكم."
    },
    {
      "question": "تحتاج خلايا الـ DRAM إلى التحديث (refresh) لأن القراءة تغير مستوى الجهد للمكثف في الخلية وتتسرب التيارات من المكثفات.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "تخزن خلايا الـ DRAM البيانات كشحنة في المكثفات، والتي تتسرب منها الشحنة بمرور الوقت. يؤدي التحديث إلى استعادة الشحنة للحفاظ على سلامة البيانات."
    },
    {
      "question": "التنبؤ بالـ Branch العالمي ذو المستويين (Two-level global branch prediction) هو Microarchitecture.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "التنبؤ بالـ Branch ذو المستويين هو تقنية Microarchitectural تُستخدم في الـ CPUs لتحسين دقة التنبؤ بالـ Branch عن طريق تتبع سلوك الـ Branch السابق."
    },
    {
      "question": "متحكمات الـ DRAM مصممة لتقليل إنتاجية بيانات الـ DRAM.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 1,
      "explanation": "تم تصميم متحكمات الـ DRAM لـ زيادة الإنتاجية إلى أقصى حد عن طريق إعادة ترتيب الطلبات (على سبيل المثال، FR-FCFS) لتقليل زمن الوصول وتحسين الكفاءة."
    },
    {
      "question": "الأنظمة المدمجة بعمق (Deeply Embedded Systems) غير قابلة للبرمجة بمجرد حرق منطق البرنامج للجهاز في الـ ROM.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "تستخدم العديد من الأنظمة المدمجة بعمق ROM أو ذاكرة فلاش للـ firmware، مما يجعلها غير قابلة للبرمجة بعد النشر ما لم تكن مصممة للتحديثات."
    },
    {
      "question": "يتقدم Program counter بالتسلسل باستثناء تعليمات نقل التحكم (control transfer instructions).",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "يزيد عداد البرنامج (PC) بالتسلسل للتنفيذ الخطي ولكنه يقفز إلى عناوين جديدة لـ branches، أو jumps، أو interrupts."
    },
    {
      "question": "ISA تتغير ببطء أكبر من Microarchitecture.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "عادة ما تكون Instruction Set Architecture (ISA) مستقرة من أجل التوافقية، بينما تتطور Microarchitecture بشكل أسرع لتحسين الأداء (على سبيل المثال، pipelining، caching)."
    },
    {
      "question": "نوع تعيين الذاكرة المستخدم في معالجات Intel هو Little Endian.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "تستخدم معالجات Intel x86 ترتيب البايت Little Endian، حيث يتم تخزين البايت الأقل أهمية في أدنى عنوان للذاكرة."
    },
    {
      "question": "RAID 5 يطبق تجزئة القرص (disk striping) مع محرك parity مخصص.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 1,
      "explanation": "يستخدم RAID 5 parity موزعًا عبر جميع الأقراص، وليس محرك parity مخصصًا (وهو ما يميز RAID 3/4)."
    },
    {
      "question": "مستوى RAID 1 لا يوفر أي Redundancy على الإطلاق.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 1,
      "explanation": "يوفر RAID 1 (mirroring) redundancy كاملة عن طريق مضاعفة البيانات على قرصين أو أكثر."
    },
    {
      "question": "أثناء نقل البيانات بين المعالج والذاكرة نستخدم الـ Register.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "تحتفظ الـ Registers (مثل MAR، MBR) بالبيانات مؤقتًا أثناء عمليات النقل بين الـ CPU والذاكرة."
    },
    {
      "question": "الذاكرة والـ Registers هي أنواع من المواقع التي يمكنها الاحتفاظ بالـ operands المصدر والوجهة.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "يمكن لكل من عناوين الذاكرة والـ registers أن تعمل كـ operands في التعليمات (على سبيل المثال، ADD [MEM], R1)."
    },
    {
      "question": "ARM ISA تستخدم وضع عنونة Load/Store architecture.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "يستخدم ARM معمارية Load/Store حيث لا تصل إلى الذاكرة سوى تعليمات Load/Store، بينما تعمل التعليمات الأخرى على الـ registers."
    },
    {
      "question": "SAN يسمح للعديد من الـ clients بالوصول إلى الملفات في نفس الوقت بأداء عالٍ جدًا.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "تم تصميم Storage Area Networks (SANs) لتوفير أداء عالٍ والوصول المتزامن إلى تخزين الـ block-level بواسطة العديد من الـ clients."
    },
    {
      "question": "Alpha ISA SCAN opcode يعمل على سلاسل الأحرف (character strings)؛ PUSH\\POP.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 1,
      "explanation": "لا يحتوي Alpha ISA على SCAN opcode لعمليات السلاسل؛ PUSH/POP هي عمليات stack لا علاقة لها بمسح السلاسل."
    },
    {
      "question": "Orthogonal ISA تشير إلى أنه يمكن استخدام جميع أوضاع العنونة (addressing modes) مع أنواع التعليمات.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "Orthogonal ISA تعني أنه يمكن استخدام أوضاع العنونة بشكل موحد عبر أنواع التعليمات المختلفة، مما يوفر مرونة في البرمجة."
    },
    {
      "question": "من المحتمل أن يتم تنفيذ العديد من التعليمات في نفس الوقت بترتيب تدفق التحكم (control flow order).",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "في معالجات الـ superscalar، يمكن تنفيذ تعليمات متعددة في وقت واحد مع الحفاظ على تدفق التحكم الصحيح."
    },
    {
      "question": "في ترتيب تدفق البيانات (dataflow order)، تحدد كل تعليمة 'من' يجب أن يتلقى النتيجة.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "تنفذ معماريات تدفق البيانات (dataflow architectures) التعليمات بناءً على توفر الـ operand، مع توجيه النتائج إلى التعليمات التابعة."
    },
    {
      "question": "مستويات RAID من 4 إلى 6 تستخدم تقنية الوصول الافتراضي (virtual access) التي تسمح بتلبية طلبات الإدخال/الإخراج المنفصلة بشكل متوازي.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 1,
      "explanation": "تستخدم RAID 4-6 الـ striping مع parity، وليس الوصول الافتراضي. يتم تمكين I/O المتوازي بواسطة الـ striping ولكنه مقيد بحسابات الـ parity."
    },
    {
      "question": "لا يمكن للمبرمج الوصول إلى الـ pipeline registers مباشرة.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "الـ pipeline registers هي مكونات داخلية للمعالج تستخدم لتنظيم التعليمات وليست مرئية للمبرمجين من الناحية المعمارية."
    },
    {
      "question": "واجهات بين الكمبيوتر والأجهزة الطرفية (peripherals) هي مثال على سمة تنظيمية (organizational attribute).",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "واجهات الإدخال/الإخراج (I/O interfaces) هي سمات تنظيمية حيث أنها تفاصيل تنفيذ الأجهزة الشفافة لـ ISA."
    },
    {
      "question": "بنية الكمبيوتر ووظائفه، في جوهرها، بسيطة.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "بينما قد تكون المبادئ الأساسية بسيطة، فإن أنظمة الكمبيوتر الحديثة معقدة للغاية في بنيتها وعملها."
    },
    {
      "question": "عندما يتم نقل البيانات لمسافات أطول، إلى أو من جهاز بعيد، تُعرف العملية باسم نقل البيانات (data transport).",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 1,
      "explanation": "يشير نقل البيانات (data transport) إلى نقل البيانات عبر مسافات أطول، ويتضمن عادة بروتوكولات الشبكة والأجهزة المتخصصة."
    },
    {
      "question": "ميزة SAN هي عدم وجود قيود على المسافة.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "توجد قيود عملية على مسافة شبكات SAN بسبب زمن الاستجابة ومتطلبات البروتوكول، على الرغم من أن تقنيات مثل FCIP يمكن أن توسع هذا."
    },
    {
      "question": "RAID يوفر تحمل الأخطاء (fault tolerance) للبيانات والتطبيقات المشتركة.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "توفر RAID (باستثناء RAID 0) تحمل الأخطاء من خلال التكرار (redundancy)، مما يحمي من أعطال القرص."
    },
    {
      "question": "يمكن إنتاج العديد من الـ Transistors في نفس الوقت على شريحة واحدة من الـ silicon.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "يصنع تصنيع أشباه الموصلات العديد من الترانزستورات في وقت واحد من خلال عمليات الطباعة الضوئية على رقائق الـ silicon."
    },
    {
      "question": "المعالج المخصص (Dedicated processor) يعرف بقدرة المعالج على تنفيذ أنظمة تشغيل معقدة.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 1,
      "explanation": "المعالجات المخصصة متخصصة لمهام محددة، وغالبًا لا تقوم بتشغيل أنظمة تشغيل كاملة. المعالجات ذات الأغراض العامة هي التي تنفذ أنظمة تشغيل معقدة."
    },
    {
      "question": "تستخدم الأنظمة المدمجة بعمق (Deeply Embedded Systems) microcontroller بدلاً من microprocessor.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "تستخدم الأنظمة المدمجة بعمق عادةً microcontrollers (MCUs) التي تدمج الـ CPU والذاكرة والـ I/O على شريحة واحدة."
    },
    {
      "question": "تنزيل الإنترنت على القرص (Internet download to disk) هو مثال على المعالجة من/إلى التخزين.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 1,
      "explanation": "يتضمن تنزيل الملفات معالجة بيانات الشبكة وتخزينها على القرص، مما يمثل عمليات إدخال/إخراج التنزيل من الإنترنت إلى القرص هو عملية نقل بيانات، وليس مهمة معالجة."
    },
    {
      "question": "تحديث كشف الحساب البنكي هو مثال على المعالجة من التخزين إلى الـ I/O.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 1,
      "explanation": "يتضمن تحديث كشف الحساب البنكي بشكل أساسي معالجة البيانات المخزنة (من التخزين إلى الـ CPU)، وليس بالضرورة عمليات I/O."
    },
    {
      "question": "لاحظ مور أن عدد الـ transistors التي يمكن وضعها على شريحة واحدة يتضاعف كل عام.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "نصت ملاحظة مور الأصلية عام 1965 على أن عدد الـ transistors يتضاعف سنويًا (تم تعديله لاحقًا إلى حوالي 18-24 شهرًا)."
    },
    {
      "question": "انخفاض تكلفة منطق الكمبيوتر ودوائر الذاكرة بمعدل كبير هو من نتائج قانون مور (Moore's law).",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "دفع قانون مور إلى تخفيض التكاليف من خلال التوسع، مما جعل الـ transistors أرخص وأكثر عددًا بمرور الوقت."
    },
    {
      "question": "يمكن تقييم معالج حديث عن طريق إجراء تطبيق عملي على مستوى RTL و C.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "يتضمن تقييم المعالج التحقق من تصميم RTL (Register Transfer Level) ونمذجة الأداء في C/HLS."
    },
    {
      "question": "وحدة floating-point التي تستخدم قيم floating-point واسعة لدقة إضافية هي Microarchitecture.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "تصميم FPU (على سبيل المثال، 64 بت مقابل 128 بت) هو خيار microarchitectural يؤثر على الدقة والأداء."
    },
    {
      "question": "تنفيذ التعليمات المشروطة (Predicated instruction execution) هو ISA.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "تنفيذ التعليمات المشروطة (Predicated instruction execution) هو ميزة تُعرف على مستوى بنية مجموعة التعليمات (ISA) للسماح بالتنفيذ الشرطي بدون استخدام الفروع."
    },
    {
      "question": "يستغرق الوصول إلى الذاكرة المتعارض مع الصف (row-conflict memory access) وقتًا أطول بكثير من الوصول إلى الصف المتاح (row-hit access).",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "تتطلب تعارضات الصفوف في الـ DRAM إعادة شحن وتنشيط الصفوف، مما يضيف زمن استجابة يتراوح بين 30-40 نانوثانية مقارنة بـ row hits (~15 نانوثانية)."
    },
    {
      "question": "لا تدعم معالجات ARM الـ Byte addressability.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 1,
      "explanation": "تدعم معالجات ARM الذاكرة القابلة للعنونة بالبايت من خلال تعليمات تحميل/تخزين البايت (مثل LDRB/STRB)."
    },
    {
      "question": "عيب فك التشفير غير الموحد (non-uniform decode) هو أنه يقيد تنسيق التعليمات.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 1,
    },
    {
      "question": "معالج RISC لديه تصميم أكثر تعقيدًا من CISC.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 1,
      "explanation": "عادة ما تكون تصاميم RISC أبسط بسبب التعليمات الموحدة، بينما تحتوي معالجات CISC على فك تشفير معقد لتعليمات ذات طول متغير."
    },
    {
      "question": "العنونة المباشرة (Immediate addressing) تنقل الـ operand في العنوان في A6 إلى سجلات البيانات 5.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 1,
      "explanation": "تستخدم العنونة المباشرة قيم الـ operand المضمنة في التعليمات، وليس عناوين الذاكرة (هذا يصف العنونة المباشرة)."
    },
    {
      "question": "يعتبر المعالج 'Super Scalar' الحديث الذي يمكنه تنفيذ تعليمات أو أكثر في وقت واحد معالجًا أحادي النواة.",
      "options": [
        "صحيح",
        "خطأ"
      ],
      "correct": 0,
      "explanation": "يشير الـ Superscalar إلى التنفيذ المتوازي داخل نواة واحدة. Multi-core يعني وجود وحدات معالجة مركزية متعددة على شريحة واحدة."
    }
  ],

  "عام 3": [
    {
      "question": "إن بنية الكمبيوتر وطريقة عمله بسيطان في جوهرهما.",
      "options": [
        "أ) صح",
        "ب) خطأ"
      ],
      "correct": 0,
    },
    {
      "question": "يجب أن يكون الكمبيوتر قادرًا على معالجة البيانات وتخزينها ونقلها والتحكم فيها.",
      "options": [
        "أ) صح",
        "ب) خطأ"
      ],
      "correct": 0,
      "explanation": "هذه الوظائف الأربع (المعالجة والتخزين ونقل البيانات والتحكم) أساسية لجميع أنظمة الكمبيوتر."
    },
    {
      "question": "تتغير تقنية الكمبيوتر بوتيرة ______.",
      "options": [
        "أ) بطيئة",
        "ب) بطيئة إلى متوسطة",
        "ج) سريعة",
        "د) غير موجودة"
      ],
      "correct": 2,
      "explanation": "تتبع التطورات في الحوسبة اتجاهات أسية مثل قانون مور، مما يجعل التغيير التكنولوجي سريعًا للغاية."
    },
    {
      "question": "تشير 'هندسة الكمبيوتر' إلى تلك السمات التي لها تأثير مباشر على التنفيذ المنطقي للبرنامج.",
      "options": [
        "أ) التنظيم",
        "ب) التفاصيل",
        "ج) التصميم",
        "د) الهندسة المعمارية"
      ],
      "correct": 3,
      "explanation": "تحدد هندسة الكمبيوتر الواجهة المنطقية المرئية للمبرمجين (مثل مجموعة التعليمات وأنماط العنونة)."
    },
    {
      "question": "تشمل السمات المعمارية ______.",
      "options": [
        "أ) آليات الإدخال/الإخراج",
        "ب) إشارات التحكم",
        "أ) آليات الإدخال/الإخراج",
        "د) تقنية الذاكرة المستخدمة"
      ],
      "correct": 2
    },
    {
      "question": "تشمل السمات ______ تفاصيل الأجهزة الشفافة للمبرمج.",
      "options": [
        "أ) الواجهة",
        "ب) التنظيمية",
        "ج) الذاكرة",
        "د) المعمارية"
      ],
      "correct": 1,
      "explanation": "تعتبر السمات التنظيمية (مثل عمق خط الأنابيب وحجم ذاكرة التخزين المؤقت) تحسينات للأجهزة غير مرئية للبرامج."
    },
    {
      "question": "إن مسألة تصميم ______ ما إذا كان الكمبيوتر سيحتوي على تعليمة ضرب أم لا.",
      "options": [
        "أ) معمارية",
        "ب) ذاكرة",
        "ج) أولية",
        "د) تنظيمية"
      ],
      "correct": 0,
      "explanation": "يعد تضمين تعليمات محددة (مثل الضرب) قرارًا معماريًا يؤثر على مجموعة التعليمات (ISA)."
    },
    {
      "question": "إن مسألة ______ ما إذا كانت تعليمة الضرب ستُنفذ بواسطة وحدة ضرب خاصة أو بواسطة آلية تستخدم وحدة الجمع في النظام بشكل متكرر.",
      "options": [
        "أ) معمارية",
        "ب) ذاكرة",
        "ج) ميكانيكية",
        "د) تنظيمية"
      ],
      "correct": 3,
      "explanation": "تعد خيارات التنفيذ (مثل مضاعف مخصص مقابل الجمع التكراري) قرارات تنظيمية/متعلقة بالأجهزة."
    },
    {
      "question": "النظام ______ هو مجموعة من الأنظمة الفرعية المترابطة.",
      "options": [
        "أ) ثانوي",
        "ب) هرمي",
        "ج) معقد",
        "د) وظيفي"
      ],
      "correct": 1
    },
    {
      "question": "يشار إلى جهاز الإدخال/الإخراج باسم ______.",
      "options": [
        "أ) وحدة المعالجة المركزية",
        "ب) جهاز التحكم",
        "ج) طرفي",
        "د) سجل"
      ],
      "correct": 2,
      "explanation": "تعتبر أجهزة الإدخال/الإخراج (لوحات المفاتيح، الطابعات، إلخ) أجهزة طرفية توسع وظائف الكمبيوتر."
    },
    {
      "question": "عند نقل البيانات عبر مسافات أطول، إلى أو من جهاز بعيد، تُعرف العملية باسم ______.",
      "options": [
        "أ) اتصالات البيانات",
        "ب) التسجيل",
        "ج) الهيكلة",
        "د) نقل البيانات"
      ],
      "correct": 0,
      "explanation": "تشير اتصالات البيانات على وجه التحديد إلى عملية نقل البيانات عبر مسافات طويلة بين الأجهزة أو الأنظمة البعيدة."
    },
    {
      "question": "يخزن ______ البيانات.",
      "options": [
        "أ) ناقل النظام",
        "ب) الإدخال/الإخراج",
        "ج) الذاكرة الرئيسية",
        "د) وحدة التحكم"
      ],
      "correct": 2,
      "explanation": "الذاكرة الرئيسية (RAM) هي التخزين الأساسي المتطاير للبيانات والتعليمات أثناء التنفيذ."
    },
    {
      "question": "ينقل ______ البيانات بين الكمبيوتر وبيئته الخارجية.",
      "options": [
        "أ) نقل البيانات",
        "ب) الإدخال/الإخراج",
        "ج) السجل",
        "د) التوصيل البيني لوحدة المعالجة المركزية"
      ],
      "correct": 1,
      "explanation": "تدير الأنظمة الفرعية للإدخال/الإخراج تبادل البيانات مع الأجهزة الخارجية (الأقراص، الشبكات، إلخ)."
    },
    {
      "question": "أحد الأمثلة الشائعة للترابط بين الأنظمة هو عن طريق ______.",
      "options": [
        "أ) سجل",
        "ب) ناقل النظام",
        "ج) نقل البيانات",
        "د) جهاز التحكم"
      ],
      "correct": 1,
      "explanation": "تربط النواقل (مثل PCIe، USB) وحدة المعالجة المركزية والذاكرة وأجهزة الإدخال/الإخراج باستخدام مسارات كهربائية مشتركة."
    },
    {
      "question": "الـ ______ هي آلية توفر الاتصال بين وحدة المعالجة المركزية والذاكرة الرئيسية والإدخال/الإخراج.",
      "options": [
        "أ) الترابط بين الأنظمة",
        "ب) الترابط بين وحدات المعالجة المركزية",
        "ج) الطرفي",
        "د) المعالج"
      ],
      "correct": 0,
      "explanation": "تتيح الموصلات البينية للنظام (النواقل، الشبكات) اتصال المكونات عبر الكمبيوتر بأكمله."
    },
    {
      "question": "توفر ______ تخزينًا داخليًا لوحدة المعالجة المركزية.",
      "options": [
        "أ) وحدات التحكم",
        "ب) وحدات المنطق الحسابي (ALU)",
        "ج) الذاكرة الرئيسية",
        "د) السجلات"
      ],
      "correct": 3,
      "explanation": "السجلات هي أسرع مواقع التخزين التي يمكن لوحدة المعالجة المركزية الوصول إليها مباشرة للبيانات المؤقتة."
    },
    {
      "question": "يؤدي ______ وظائف معالجة البيانات في الكمبيوتر.",
      "options": [
        "أ) السجل",
        "ب) التوصيل البيني لوحدة المعالجة المركزية",
        "ج) وحدة المنطق الحسابي (ALU)",
        "د) ناقل النظام"
      ],
      "correct": 2,
      "explanation": "تنفذ وحدة المنطق الحسابي (ALU) العمليات الحسابية والمنطقية لمعالجة البيانات."
    },
    {
      "question": "أصغر كيان للذاكرة يسمى ______.",
      "options": [
        "أ) خلية",
        "ب) كتلة",
        "ج) مثيل",
        "د) وحدة"
      ],
      "correct": 0,
      "explanation": "تخزن الخلية الذاكرة بتًا واحدًا (0/1) وهي اللبنة الأساسية لتسلسلات الذاكرة الهرمية."
    },
    {
      "question": "عند استخدام تعيين Big-Endian لتخزين رقم، يتم تخزين بت الإشارة للرقم في ______.",
      "options": [
        "أ) البايت الأعلى ترتيبًا في الكلمة",
        "ب) البايت الأقل ترتيبًا في الكلمة",
        "ج) لا يمكن القول",
        "د) لا شيء مما ذكر"
      ],
      "correct": 0,
      "explanation": "يخزن Big-Endian البايت الأكثر أهمية (بما في ذلك بتات الإشارة) في أدنى عنوان ذاكرة."
    },
    {
      "question": "العامل (العوامل) الرئيسي في النجاح التجاري للكمبيوتر هو ______.",
      "options": [
        "أ) الأداء",
        "ب) التكلفة",
        "ج) السرعة",
        "د) كل من الأداء والتكلفة"
      ],
      "correct": 3,
      "explanation": "يوازن النجاح في السوق بين الأداء (السرعة والقدرة) وفعالية التكلفة."
    },
    {
      "question": "تم تطوير ______ خصيصًا للأنظمة المخططة.",
      "options": [
        "أ) برامج الخدمات",
        "ب) أدوات تسريع",
        "ج) المترجمات المحسنة",
        "د) لا شيء مما ذكر"
      ],
      "correct": 2,
      "explanation": "تعيد المترجمات المحسنة ترتيب التعليمات البرمجية لتقليل التوقفات في خط الأنابيب (مثل التنبؤ بالفرع، وجدولة التعليمات)."
    },
    {
      "question": "تتشابك دورات الجلب والتنفيذ بمساعدة ______.",
      "options": [
        "أ) تعديل في بنية المعالج",
        "ب) الساعة",
        "ج) وحدة خاصة",
        "د) وحدة التحكم"
      ],
      "correct": 1
    },
    {
      "question": "تُعرف عملية خط الأنابيب أيضًا باسم ______.",
      "options": [
        "أ) عملية متسلسلة فائقة",
        "ب) عملية خط التجميع",
        "ج) دورة فون نيومان",
        "د) لا شيء مما ذكر"
      ],
      "correct": 1,
      "explanation": "توازي عملية خط الأنابيب خطوط التجميع في المصنع، حيث تقسم المهام إلى مراحل متسلسلة."
    },
    {
      "question": "يجب أن تكتمل كل مرحلة في خط الأنابيب خلال دورة ______.",
      "options": [
        "أ) 1",
        "ب) 2",
        "ج) 3",
        "د) 4"
      ],
      "correct": 0,
      "explanation": "تُكمل خطوط الأنابيب المثالية كل مرحلة في دورة ساعة واحدة للحفاظ على الإنتاجية."
    },
    {
      "question": "لزيادة سرعة الوصول إلى الذاكرة في خط الأنابيب، نستخدم ______.",
      "options": [
        "أ) مواقع ذاكرة خاصة",
        "ب) سجلات ذات أغراض خاصة",
        "ج) ذاكرة التخزين المؤقت (Cache)",
        "د) المخازن المؤقتة (Buffers)"
      ],
      "correct": 2,
      "explanation": "تقلل ذاكرة التخزين المؤقت زمن وصول الذاكرة عن طريق تخزين البيانات التي يتم الوصول إليها بشكل متكرر بالقرب من وحدة المعالجة المركزية."
    },
    {
      "question": "تتبع معالجات Sun Microsystems عادةً بنية ______.",
      "options": [
        "أ) CISC",
        "ب) ISA",
        "ج) ULTRA SPARC",
        "د) RISC"
      ],
      "correct": 3,
      "explanation": "تستخدم معالجات SPARC من Sun مبادئ RISC (كمبيوتر بمجموعة تعليمات مخفضة)."
    },
    {
      "question": "تم تطوير كل من معماريات CISC و RISC لتقليل الـ ______.",
      "options": [
        "أ) التكلفة",
        "ب) التأخير الزمني",
        "ج) الفجوة الدلالية",
        "د) جميع ما ذكر"
      ],
      "correct": 2,
      "explanation": "تهدف هذه المعماريات إلى سد الفجوة بين اللغات عالية المستوى وتعليمات الآلة."
    },
    {
      "question": "أي من الآلات التالية ليست آلة CISC.",
      "options": [
        "أ) IBM 370/168",
        "ب) VAX 11/780",
        "ج) Intel 80486",
        "د) Motorola A567"
      ],
      "correct": 3,
      "explanation": "Motorola A567 هو معالج RISC، على عكس المعالجات الأخرى التي هي CISC."
    },
    {
      "question": "خط الأنابيب هو ميزة فريدة لـ ______.",
      "options": [
        "أ) RISC",
        "ب) CISC",
        "ج) ISA",
        "د) IANA"
      ],
      "correct": 0,
      "explanation": "بينما يوجد خط الأنابيب في كليهما، إلا أن تعليمات RISC الأبسط تسمح بخطوط أنابيب أعمق."
    },
    {
      "question": "في بنية CISC، يتم تخزين معظم التعليمات المعقدة في ______.",
      "options": [
        "أ) سجل",
        "ب) صمامات ثنائية",
        "ج) CMOS",
        "د) ترانزستورات"
      ],
      "correct": 3,
      "explanation": "يتم ربط التعليمات المعقدة مباشرة في منطق الترانزستور الخاص بالمعالج."
    },
    {
      "question": "تسمى مجموعة الكيانات المذكورة أعلاه حيث يتم تخزين البيانات بـ ______.",
      "options": [
        "أ) كتلة",
        "ب) مجموعة",
        "ج) كلمة",
        "د) بايت"
      ],
      "correct": 0
    },
    {
      "question": "ينشئ العنوان ذو 24 بت مساحة عنونة تبلغ ______ موقعًا.",
      "options": [
        "أ) 1024",
        "ب) 4096",
        "ج) 248",
        "د) 16,777,216"
      ],
      "correct": 3,
      "explanation": "$$2^{24} = 16,777,216$$ مواقع ذاكرة فريدة قابلة للعنونة."
    },
    {
      "question": "إذا كان النظام آلة 64 بت، فسيكون طول كل كلمة ______.",
      "options": [
        "أ) 4 بايت",
        "ب) 8 بايت",
        "ج) 16 بايت",
        "د) 12 بايت"
      ],
      "correct": 1,
      "explanation": "64 بت = 8 بايت (1 بايت = 8 بت)."
    },
    {
      "question": "نوع تعيين الذاكرة المستخدم في معالجات Intel هو ______.",
      "options": [
        "أ) Little Endian",
        "ب) Big Endian",
        "ج) Medium Endian",
        "د) لا شيء مما ذكر"
      ],
      "correct": 0,
      "explanation": "تستخدم معالجات Intel x86/x64 Little Endian (أقل بايت أهمية في أدنى عنوان)."
    },
    {
      "question": "للحصول على العنوان الفعلي من العنوان المنطقي الذي تم إنشاؤه بواسطة وحدة المعالجة المركزية، نستخدم ______.",
      "options": [
        "أ) MAR",
        "ب) MMU",
        "ج) تراكيب",
        "د) TLB"
      ],
      "correct": 1,
      "explanation": "تقوم وحدة إدارة الذاكرة (MMU) بترجمة العناوين الافتراضية/المنطقية إلى عناوين فعلية."
    },
    {
      "question": "تُستخدم طريقة ______ لتعيين العناوين المنطقية ذات الطول المتغير على الذاكرة الفعلية.",
      "options": [
        "أ) الترحيل",
        "ب) التراكيب",
        "ج) التجزئة",
        "د) الترحيل مع التجزئة"
      ],
      "correct": 2,
      "explanation": "تدعم التجزئة كتل الذاكرة ذات الأحجام المتغيرة، على عكس الترحيل ذي الحجم الثابت."
    },
    {
      "question": "أثناء نقل البيانات بين المعالج والذاكرة، نستخدم ______.",
      "options": [
        "أ) ذاكرة التخزين المؤقت",
        "ب) TLB",
        "ج) المخازن المؤقتة",
        "د) السجلات"
      ],
      "correct": 3,
      "explanation": "تحتفظ السجلات (مثل MAR، MDR) بالبيانات أثناء عمليات نقل وحدة المعالجة المركزية والذاكرة."
    },
    {
      "question": "تقسم الذاكرة الفعلية إلى مجموعات ذات حجم محدد تسمى ______.",
      "options": [
        "أ) إطارات",
        "ب) صفحات",
        "ج) كتل",
        "د) متجهات"
      ],
      "correct": 0,
      "explanation": "تقسم الذاكرة الفعلية إلى إطارات (عادة 4 كيلوبايت لكل منها) لأغراض الترحيل."
    },
    {
      "question": "يشير CISC إلى ______.",
      "options": [
        "أ) مكمل مجموعة تعليمات الكمبيوتر",
        "ب) مكمل مجموعة التعليمات الكاملة",
        "ج) مكونات مجموعة التعليمات المفهرسة للكمبيوتر",
        "د) كمبيوتر بمجموعة تعليمات معقدة"
      ],
      "correct": 3,
      "explanation": "تركز معماريات CISC على التعليمات الغنية متعددة الدورات."
    },
    {
      "question": "بنية الكمبيوتر التي تهدف إلى تقليل وقت تنفيذ التعليمات هي ______.",
      "options": [
        "أ) CISC",
        "ب) RISC",
        "ج) ISA",
        "د) ANNA"
      ],
      "correct": 1,
      "explanation": "تحقق RISC تنفيذًا أسرع عبر تعليمات أبسط ذات دورة واحدة."
    },
    {
      "question": "يتمتع معالج RISC بتصميم أكثر تعقيدًا من CISC.",
      "options": [
        "أ) صح",
        "ب) خطأ"
      ],
      "correct": 1,
      "explanation": "تُعد تصاميم RISC أبسط بسبب التعليمات الموحدة وخطوط الأنابيب."
    },
    {
      "question": "الميزة البارزة لآلة RISC من بين ما يلي هي ______.",
      "options": [
        "أ) عدد أنماط العنونة المخفضة",
        "ب) زيادة حجم الذاكرة",
        "ج) وجود فتحة تأخير للفرع",
        "د) جميع ما ذكر"
      ],
      "correct": 0,
      "explanation": "تبسط RISC أنماط العنونة لتبسيط تنفيذ التعليمات."
    },
    {
      "question": "أي من المعماريات التالية موفرة للطاقة؟",
      "options": [
        "أ) CISC",
        "ب) RISC",
        "ج) ISA",
        "د) IANA"
      ],
      "correct": 1,
      "explanation": "تستهلك دوائر RISC الأبسط عادةً طاقة أقل من CISC."
    },
    {
      "question": "يشير ARM إلى ______.",
      "options": [
        "أ) Advanced Rate Machines",
        "ب) Advanced RISC Machines",
        "ج) Artificial Running Machines",
        "د) Aviary Running Machines"
      ],
      "correct": 1,
      "explanation": "كان ARM في الأصل يعني Acorn RISC Machine، ثم أعيد تسميته لاحقًا."
    },
    {
      "question": "الأهمية الرئيسية لمعالجات ARM الدقيقة هي توفير التشغيل بـ ______.",
      "options": [
        "أ) تكلفة منخفضة واستهلاك طاقة منخفض",
        "ب) درجة أعلى من تعدد المهام",
        "ج) أخطاء أو عيوب أقل",
        "د) إدارة ذاكرة فعالة"
      ],
      "correct": 0,
      "explanation": "يهيمن ARM على الأجهزة المحمولة بسبب كفاءته في استهلاك الطاقة وفعاليته من حيث التكلفة."
    },
    {
      "question": "تم تصميم معالجات ARM في الأساس لـ ______.",
      "options": [
        "أ) أنظمة الحواسيب المركزية",
        "ب) الأنظمة الموزعة",
        "ج) الأنظمة المحمولة",
        "د) أجهزة الكمبيوتر العملاقة"
      ],
      "correct": 2,
      "explanation": "يستهدف تصميم ARM منخفض الطاقة التطبيقات المدمجة والمحمولة."
    },
    {
      "question": "لا تدعم معالجات ARM عنونة البايت.",
      "options": [
        "أ) صح",
        "ب) خطأ"
      ],
      "correct": 1,
      "explanation": "يدعم ARM عنونة البايت عبر تعليمات مثل LDRB/STRB."
    },
    {
      "question": "مساحة العنوان في ARM هي ______.",
      "options": [
        "أ) 224",
        "ب) 264",
        "ج) 216",
        "د) 232"
      ],
      "correct": 3,
      "explanation": "تستخدم معماريات ARM ذات 32 بت عنونة 32 بت (مساحة عنوان 4 جيجابايت)."
    },
    {
      "question": "نظام العنونة المدعوم بواسطة أنظمة ARM هو/هي ______.",
      "options": [
        "أ) Little Endian",
        "ب) Big Endian",
        "ج) X-Little Endian",
        "د) كل من Little & Big Endian"
      ],
      "correct": 3,
      "explanation": "يدعم ARM إمكانية التبديل بين Endianness للتوافق."
    },
    {
      "question": "يمكن الوصول إلى الذاكرة في أنظمة ARM بواسطة تعليمات ______.",
      "options": [
        "ط) تخزين",
        "ث) نقل",
        "ج) تحميل",
        "ح) حسابي",
        "خ) منطقي",
        "أ) ط، ج",
        "ب) ط، ث",
        "ج) ط، ح، خ",
        "د) ج، ح، خ"
      ],
      "correct": 0
    },
    {
      "question": "يشير RISC إلى ______.",
      "options": [
        "أ) Restricted Instruction Sequencing Computer",
        "ب) Restricted Instruction Sequential Compiler",
        "ج) Reduced Instruction Set Computer",
        "د) Reduced Induction Set Computer"
      ],
      "correct": 2,
      "explanation": "تبسط RISC التعليمات من أجل تنفيذ أسرع وأكثر كفاءة."
    },
    {
      "question": "في ARM، يتم تنفيذ PC باستخدام ______.",
      "options": [
        "أ) ذاكرات التخزين المؤقت (Caches)",
        "ب) أكوام (Heaps)",
        "ج) سجل الأغراض العامة",
        "د) مكدس (Stack)"
      ],
      "correct": 2,
      "explanation": "عداد البرنامج (R15) في ARM هو جزء من ملف السجلات الخاص به."
    },
    {
      "question": "تسمى السجلات المكررة الإضافية المستخدمة في آلات ARM بـ ______.",
      "options": [
        "أ) السجلات المنسوخة",
        "ب) السجلات المترابطة",
        "ج) السجلات الإضافية",
        "د) السجلات الخارجية"
      ],
      "correct": 1,
      "explanation": "تبدل السجلات المترابطة السياق أثناء المقاطعات/تغييرات الامتياز."
    },
    {
      "question": "تستخدم السجلات المترابطة لـ ______.",
      "options": [
        "أ) التبديل بين وضع الإشراف ووضع المقاطعة",
        "ب) التخزين الممتد",
        "ج) نفس سجلات الأغراض العامة الأخرى",
        "د) لا شيء مما ذكر"
      ],
      "correct": 0,
      "explanation": "تمكن هذه السجلات التبديل السريع للسياق لمعالجة الاستثناءات."
    },
    {
      "question": "يتم ترميز كل تعليمة في آلات ARM في كلمة ______ بايت.",
      "options": [
        "أ) 2 بايت",
        "ب) 3 بايت",
        "ج) 4 بايت",
        "د) 8 بايت"
      ],
      "correct": 2,
      "explanation": "تستخدم ARM الكلاسيكية تعليمات بطول ثابت 32 بت (4 بايت)."
    },
    {
      "question": "تنفذ جميع التعليمات في ARM بشكل مشروط.",
      "options": [
        "أ) صح",
        "ب) خطأ"
      ],
      "correct": 0,
      "explanation": "تتضمن تعليمات ARM حقولًا شرطية (مثل ADDEQ) لتخطي التنفيذ."
    },
    {
      "question": "وضع العنونة حيث EA (العنوان الفعلي) للمُعامل هو محتويات Rn هو ______.",
      "options": [
        "أ) وضع ما قبل الفهرسة",
        "ب) وضع ما قبل الفهرسة مع الكتابة الخلفية",
        "ج) وضع ما بعد الفهرسة",
        "د) لا شيء مما ذكر"
      ],
      "correct": 2
    },
    {
      "question": "العنوان الفعلي للتعليمة المكتوبة في وضع ما بعد الفهرسة، MOVE[Rn]+Rm هو ______.",
      "options": [
        "أ) EA = [Rn]",
        "ب) EA = [Rn + Rm]",
        "ج) EA = [Rn] + Rm",
        "د) EA = [Rm] + Rn"
      ],
      "correct": 0,
      "explanation": "يستخدم الفهرسة اللاحقة القيمة الأولية لـ Rn، ثم يحدث Rn بعد العملية."
    },
    {
      "question": "عادة ما يتم استخدام تنسيق ______ لتخزين البيانات.",
      "options": [
        "أ) BCD",
        "ب) عشري",
        "ج) سداسي عشري",
        "د) ثماني"
      ],
      "correct": 0,
      "explanation": "يحافظ نظام الترميز الثنائي العشري (BCD) على القيم العشرية الدقيقة في التخزين."
    },
    {
      "question": "تنسيق الترميز ذو الـ 8 بت المستخدم لتخزين البيانات في الكمبيوتر هو ______.",
      "options": [
        "أ) ASCII",
        "ب) EBCDIC",
        "ج) ANCI",
        "د) USCII"
      ],
      "correct": 1
    },
    {
      "question": "عادة ما يكون البرنامج المصدر مكتوبًا بـ ______.",
      "options": [
        "أ) لغة التجميع",
        "ب) لغة الآلة",
        "ج) لغة عالية المستوى",
        "د) اللغة الطبيعية"
      ],
      "correct": 2,
      "explanation": "يكتب الكود المصدري بلغات قابلة للقراءة البشرية مثل C/Python."
    },
    {
      "question": "أي جهاز ذاكرة مصنوع بشكل عام من أشباه الموصلات؟",
      "options": [
        "أ) RAM",
        "ب) القرص الصلب",
        "ج) القرص المرن",
        "د) قرص CD"
      ],
      "correct": 0,
      "explanation": "تستخدم ذاكرة الوصول العشوائي (RAM) تقنية أشباه الموصلات (الترانزستورات/المكثفات)، على عكس التخزين المغناطيسي/الضوئي."
    },
    {
      "question": "تسمى ذاكرات الوصول العشوائي (RAM) الصغيرة والسريعة للغاية بـ ______.",
      "options": [
        "أ) ذاكرة التخزين المؤقت (Cache)",
        "ب) أكوام (Heaps)",
        "ج) مجمعات (Accumulators)",
        "د) مكدسات (Stacks)"
      ],
      "correct": 0,
      "explanation": "ذاكرات التخزين المؤقت هي ذاكرات تعتمد على SRAM تسد الفجوات في سرعة سجلات وحدة المعالجة المركزية."
    },
    {
      "question": "تستخدم وحدة المنطق الحسابي (ALU) ______ لتخزين النتائج الوسيطة.",
      "options": [
        "أ) المجمعات",
        "ب) السجلات",
        "ج) الكومة",
        "د) المكدس"
      ],
      "correct": 0
    },
    {
      "question": "تتحكم وحدة التحكم في الوحدات الأخرى عن طريق توليد ______.",
      "options": [
        "أ) إشارات التحكم",
        "ب) إشارات التوقيت",
        "ج) إشارات النقل",
        "د) إشارات الأوامر"
      ],
      "correct": 1
    },
    {
      "question": "______ هي أرقام وحروف مشفرة، تستخدم عمومًا كمعاملات.",
      "options": [
        "أ) المدخلات",
        "ب) البيانات",
        "ج) المعلومات",
        "د) القيم المخزنة"
      ],
      "correct": 1,
      "explanation": "تمثل البيانات القيم الخام التي تعالجها التعليمات."
    },
    {
      "question": "يمكن لأجهزة الإدخال إرسال معلومات إلى المعالج.",
      "options": [
        "أ) عندما يتم تعيين علامة الحالة SIN",
        "ب) عندما تصل البيانات بغض النظر عن علامة SIN",
        "ج) لا شيء من الحالتين",
        "د) أي من الحالتين"
      ],
      "correct": 0
    },
    {
      "question": "يُستخدم هيكل الناقل ______ عادةً لتوصيل أجهزة الإدخال/الإخراج.",
      "options": [
        "أ) ناقل واحد",
        "ب) نواقل متعددة",
        "ج) ناقل نجمي",
        "د) Rambus"
      ],
      "correct": 0
    },
    {
      "question": "تتكون واجهة الإدخال/الإخراج المطلوبة لتوصيل جهاز الإدخال/الإخراج بالناقل من ______.",
      "options": [
        "أ) جهاز فك تشفير العنوان والسجلات",
        "ب) دوائر التحكم",
        "ج) جهاز فك تشفير العنوان والسجلات ودوائر التحكم",
        "د) دوائر التحكم فقط"
      ],
      "correct": 2,
      "explanation": "تحتاج واجهات الإدخال/الإخراج إلى فك تشفير العنوان، وتخزين البيانات المؤقت (السجلات)، ومنطق التحكم."
    },
    {
      "question": "لتقليل وقت الوصول إلى الذاكرة، نستخدم عمومًا ______.",
      "options": [
        "أ) أكوام",
        "ب) ذاكرات RAM ذات سعة أعلى",
        "ج) SDRAMs",
        "د) ذاكرات التخزين المؤقت (Cache)"
      ],
      "correct": 3,
      "explanation": "تقوم ذاكرات التخزين المؤقت بتخزين البيانات التي يتم الوصول إليها بشكل متكرر لتقليل عمليات الوصول البطيئة إلى الذاكرة الرئيسية."
    },
    {
      "question": "يستخدم ______ عادةً لزيادة الحجم الظاهري للذاكرة الفعلية.",
      "options": [
        "أ) الذاكرة الثانوية",
        "ب) الذاكرة الافتراضية",
        "ج) القرص الصلب",
        "د) الأقراص"
      ],
      "correct": 1,
      "explanation": "تستخدم الذاكرة الافتراضية مساحة القرص لتوسيع الذاكرة القابلة للعنونة عبر الترحيل."
    },
    {
      "question": "يشير MFC إلى ______.",
      "options": [
        "أ) Memory Format Caches",
        "ب) Memory Function Complete",
        "ج) Memory Find Command",
        "د) Mass Format Command"
      ],
      "correct": 1,
      "explanation": "يشير MFC إلى اكتمال عمليات الذاكرة في بعض المعماريات."
    },
    {
      "question": "الفاصل الزمني بين بدء عمليتين متتاليتين للذاكرة ______.",
      "options": [
        "أ) وقت الوصول إلى الذاكرة",
        "ب) وقت البحث في الذاكرة",
        "ج) وقت دورة الذاكرة",
        "د) تأخير التعليمات"
      ],
      "correct": 2,
      "explanation": "يتضمن وقت الدورة وقت الوصول بالإضافة إلى تأخيرات الاسترداد/الشحن المسبق."
    },
    {
      "question": "في خط الأنابيب، يتم تنفيذ المهمة التي تتطلب أقل وقت أولاً.",
      "options": [
        "أ) صح",
        "ب) خطأ"
      ],
      "correct": 1,
      "explanation": "يعالج خط الأنابيب المهام في مراحل ثابتة؛ تتسبب الاختلافات في السرعة في توقفات."
    },
    {
      "question": "إذا أكملت الوحدة مهمتها قبل الفترة الزمنية المخصصة لها، فإن ______.",
      "options": [
        "أ) ستقوم ببعض المهام الأخرى في الوقت المتبقي",
        "ب) يتم إعادة تخصيص وقتها لمهمة مختلفة",
        "ج) ستبقى خاملة للوقت المتبقي",
        "د) لا شيء مما ذكر"
      ],
      "correct": 2,
      "explanation": "تتزامن مراحل خط الأنابيب مع دورة ساعة أبطأ مرحلة."
    },
    {
      "question": "تسمى الفترات الزمنية التي تكون فيها الوحدة خاملة بـ ______.",
      "options": [
        "أ) التوقفات (Stalls)",
        "ب) الفقاعات (Bubbles)",
        "ج) المخاطر (Hazards)",
        "د) كل من التوقفات والفقاعات"
      ],
      "correct": 3,
      "explanation": "الفقاعات هي توقفات في خط الأنابيب تحدث بسبب المخاطر أو التأخيرات."
    },
    {
      "question": "يسمى التنافس على استخدام جهاز الأجهزة بـ ______.",
      "options": [
        "أ) خطر هيكلي",
        "ب) توقف",
        "ج) تعليق",
        "د) لا شيء مما ذكر"
      ],
      "correct": 0,
      "explanation": "تحدث المخاطر الهيكلية عندما تكون موارد الأجهزة مفرطة الطلب."
    },
    {
      "question": "الحالة التي تكون فيها بيانات المعاملات غير متوفرة تسمى ______.",
      "options": [
        "أ) خطر البيانات",
        "ب) مخزون",
        "ج) تعليق",
        "د) خطر هيكلي"
      ],
      "correct": 0,
      "explanation": "تنشأ مخاطر البيانات من التبعيات (مثل RAW—القراءة بعد الكتابة)."
    },
    {
      "question": "يتم تخزين التعليمة المفككة في ______.",
      "options": [
        "أ) IR",
        "ب) PC",
        "ج) السجلات",
        "د) MDR"
      ],
      "correct": 0,
      "explanation": "يحتوي سجل التعليمات (IR) على التعليمات المفككة للتنفيذ."
    },
    {
      "question": "تقوم التعليمة -> Add LOCA, R0 بـ ______.",
      "options": [
        "أ) تجمع قيمة LOCA إلى R0 وتخزنها في السجل المؤقت",
        "ب) تجمع قيمة R0 إلى عنوان LOCA",
        "ج) تجمع قيم LOCA و R0 وتخزنها في R0",
        "د) تجمع قيمة LOCA بقيمة في المجمع وتخزنها في R0"
      ],
      "correct": 2,
      "explanation": "هذه التعليمة تعني عادة: $$R0 \leftarrow [R0] + [LOCA]$$ (السجل + الذاكرة)."
    },
    {
      "question": "أي السجلات يمكنها التفاعل مع التخزين الثانوي؟",
      "options": [
        "أ) MAR",
        "ب) PC",
        "ج) IR",
        "د) R0"
      ],
      "correct": 0,
      "explanation": "يتفاعل سجل عنوان الذاكرة (MAR) مباشرة مع ناقل الذاكرة لنقل العناوين."
    },
    {
      "question": "أثناء تنفيذ برنامج، ما الذي يتم تهيئته أولاً؟",
      "options": [
        "أ) MDR",
        "ب) IR",
        "ج) PC",
        "د) MAR"
      ],
      "correct": 2,
      "explanation": "يتم تهيئة عداد البرنامج (PC) إلى عنوان التعليمات الأولى."
    },
    {
      "question": "أي من سجلات المعالج متصلة بناقل الذاكرة؟",
      "options": [
        "أ) PC",
        "ب) MAR",
        "ج) IR",
        "د) كل من PC و MAR"
      ],
      "correct": 1,
      "explanation": "يتصل MAR مباشرة بناقل الذاكرة لنقل العناوين."
    },
    {
      "question": "يشير ISP إلى ______.",
      "options": [
        "أ) معالج مجموعة التعليمات",
        "ب) معالجة قياسية للمعلومات",
        "ج) بروتوكول تبادل قياسي",
        "د) إجراء خدمة المقاطعة"
      ],
      "correct": 0,
      "explanation": "يصف ISP بنية مجموعة تعليمات المعالج (ISA)."
    },
    {
      "question": "ترتبط المكونات الداخلية للمعالج بـ ______.",
      "options": [
        "أ) دوائر الترابط الداخلية للمعالج",
        "ب) ناقل المعالج",
        "ج) ناقل الذاكرة",
        "د) Rambus"
      ],
      "correct": 1,
      "explanation": "تتيح النواقل الداخلية (مثل اتصالات ALU-السجل) اتصال المكونات."
    },
    {
      "question": "يُستخدم ______ للاختيار بين زيادة PC أو إجراء عمليات ALU.",
      "options": [
        "أ) الرموز الشرطية",
        "ب) المضاعفة",
        "ج) وحدة التحكم",
        "د) لا شيء مما ذكر"
      ],
      "correct": 1
    },
    {
      "question": "يُطلق على السجلات ووحدة المنطق الحسابي (ALU) والترابط بينها مجتمعة اسم ______.",
      "options": [
        "أ) مسار المعالجة",
        "ب) مسار المعلومات",
        "ج) مسار المعلومات",
        "د) مسار البيانات"
      ],
      "correct": 3,
      "explanation": "يقوم مسار البيانات بإجراء عمليات معالجة البيانات ونقلها."
    },
    {
      "question": "يُستخدم ______ لتخزين البيانات في السجلات.",
      "options": [
        "أ) D flip flop",
        "ب) JK flip flop",
        "ج) RS flip flop",
        "د) لا شيء مما ذكر"
      ],
      "correct": 0,
      "explanation": "تُستخدم D flip-flops بشكل شائع لتخزين السجلات نظرًا لاستقرارها."
    },
    {
      "question": "أي مما يلي صحيح حول تنظيم الكمبيوتر؟",
      "options": [
        "ط) يتعامل مع قضايا التصميم عالية المستوى.",
        "ث) يتضمن المنطق (مجموعات التعليمات، أوضاع العنونة، أنواع البيانات، تحسين ذاكرة التخزين المؤقت).",
        "ج) يخبرنا تنظيم الكمبيوتر بالضبط كيف يتم ترتيب جميع الوحدات في النظام وترابطها.",
        "د) لا شيء مما سبق"
      ],
      "correct": 2,
      "explanation": "يركز تنظيم الكمبيوتر على تنفيذ الأجهزة والترابطات."
    },
    {
      "question": "يُطلق على البرنامج المكتوب وقبل ترجمته أو تجميعه اسم ______.",
      "options": [
        "أ) برنامج البدء",
        "ب) برنامج وسيط",
        "ج) برنامج المصدر",
        "د) برنامج طبيعي"
      ],
      "correct": 2,
      "explanation": "الكود المصدري هو البرنامج القابل للقراءة البشرية قبل التجميع."
    },
    {
      "question": "إن ______ هو مركز المعالجة في وحدة المعالجة المركزية.",
      "options": [
        "أ) السجلات",
        "ب) وحدة المنطق الحسابي (ALU)",
        "ج) Flip-Flop",
        "د) Multiplexer"
      ],
      "correct": 1,
      "explanation": "تنفذ وحدة المنطق الحسابي (ALU) جميع العمليات الحسابية/المنطقية."
    },
    {
      "question": "تستخدم أجهزة الإدخال ______ لتخزين البيانات المستلمة.",
      "options": [
        "أ) الذاكرة الأولية",
        "ب) الذاكرة الثانوية",
        "ج) المخزن المؤقت",
        "د) الذاكرة الخارجية"
      ],
      "correct": 2,
      "explanation": "تحتفظ المخازن المؤقتة مؤقتًا ببيانات الإدخال قبل المعالجة."
    },
    {
      "question": "تتصل أجهزة الإدخال/الإخراج بوحدة المعالجة المركزية عبر ______.",
      "options": [
        "أ) SDRAMs",
        "ب) دوائر التحكم",
        "ج) الإشارات",
        "د) الناقل"
      ],
      "correct": 3,
      "explanation": "توفر النواقل (مثل PCIe، USB) المسارات المادية لاتصال الإدخال/الإخراج."
    },
    {
      "question": "يقوم المترجم المحسن بـ ______.",
      "options": [
        "أ) تجميع أفضل للتعليمات البرمجية المعطاة",
        "ب) يستفيد من نوع المعالج ويقلل من وقت معالجته",
        "ج) يقوم بإدارة ذاكرة أفضل",
        "د) جميع ما سبق"
      ],
      "correct": 3,
      "explanation": "تعمل المترجمات المحسنة على تحسين كفاءة التعليمات البرمجية عبر أبعاد متعددة."
    },
    {
      "question": "أي ناقل يستخدم لتوصيل الشاشة بوحدة المعالجة المركزية؟",
      "options": [
        "أ) ناقل واحد",
        "ب) ناقل SCSI",
        "ج) PCIe",
        "د) Rambus"
      ],
      "correct": 2
    },
    {
      "question": "في بنية ARM، تعليمات ______ فقط هي التي تصل إلى مواقع الذاكرة.",
      "options": [
        "أ) الفرع",
        "ب) الوصول إلى سجل الحالة",
        "ج) معالجة البيانات",
        "د) التحميل والتخزين"
      ],
      "correct": 3,
      "explanation": "تستخدم ARM بنية تحميل/تخزين حيث تصل تعليمات LDR/STR فقط إلى الذاكرة."
    }
  ]
};

// Create a mapping between English and Arabic chapter names
const chapterMapping = {
  // Add your English to Arabic mappings here.
  // IMPORTANT: The LEFT side (English) MUST EXACTLY match the keys in your `quizData`.
  // The RIGHT side (Arabic) MUST EXACTLY match the keys in your `quizDataArabic`.
  'Chapter 1: Introduction': 'الفصل 1: مقدمة',
  'Chapter 2: Storage Environment and RAID': 'الفصل 2: بيئة التخزين و RAID',
  'Chapter 3: Computer Architecture Introduction and Basics': 'الفصل 3: مقدمة وهياكل الكمبيوتر الأساسية',
  'Chapter 4: Introduction and Basics': 'الفصل 4: مقدمة وأساسيات',
  'Chapter 5: What is A Computer and Von Neumann Model': 'الفصل 5: ما هو الكمبيوتر ونموذج فون نيومان',
  'Chapter 6: Introduction to ISA Tradeoffs': 'الفصل 6: مقدمة في المقايضات في ISA',
  'Chapter 7: ISA Tradeoffs': 'الفصل 7: المقايضات في ISA',
  'Chapter 8: Single-Cycle Microarchitecture': 'الفصل 8: البنية الدقيقة ذات الدورة الواحدة',
  'Chapter 9: Multi-Cycle and Pipelined Microarchitecture': 'الفصل 9: البنية الدقيقة متعددة الدورات والخطية',
  'Chapter 10: Introduction to Microarchitecture': 'الفصل 10: مقدمة في البنية الدقيقة',
  'General 1': 'عام 1',
  'General 2': 'عام 2',
  'General 3': 'عام 3',



};

// Reverse mapping (Arabic to English)
const reverseChapterMapping = {};
Object.keys(chapterMapping).forEach(englishName => {
  reverseChapterMapping[chapterMapping[englishName]] = englishName;
});

export { quizData, quizDataArabic, chapterMapping, reverseChapterMapping };
