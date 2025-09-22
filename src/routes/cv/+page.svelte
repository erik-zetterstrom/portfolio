<script>
	import ContactInformation from "../../components/ContactInformation.svelte";
	import SkillList from "../../components/SkillList.svelte";
	import Timeline from "../../components/Timeline.svelte";

</script>

<div class="flex justify-center bg-background-1">
    <div class="cv">
        <ContactInformation
            address={
                {
                    street: "Bagarfruvägen",
                    houseNumber: "29",
                    postalCode: "128 67",
                    city: "Sköndal"
                }
            }
            phoneNumer="+4673 518 41 92"
            emailAddress="erik@zetterstrom.cloud"
        />
        <Timeline
            title="Work Experience"
            items={
                [
                    {
                        title: "FrontFlow, Stockholm",
                        sections: [
                            {
                                title: "Tech Lead and Cloud Architecht",
                                body: "In charge of technical decisions, managing our infrastructure in the cloud using IaC tools and developing software.",
                                interval: {
                                    from: {
                                        year: 2024,
                                        month: "Jan"
                                    },
                                    to: null
                                }
                            },
                            {
                                title: "Backend Developer",
                                body: "Developing automation software by connecting AI-models to ERP integrations.",
                                interval: {
                                    from: {
                                        year: 2023,
                                        month: "Nov"
                                    },
                                    to: {
                                        year: 2024,
                                        month: "Jan"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        title: "HiQ, Stockholm",
                        sections: [
                            {
                                title: "Machine Learning Engineer at Pinpoint Estimates",
                                body: "Consultant assignment via HiQ. Built a tool to generate an AI-summary of quarterly reports for a given company.",
                                interval: {
                                    from: {
                                        year: 2023,
                                        month: "Mar"
                                    },
                                    to: {
                                        year: 2023,
                                        month: "May"
                                    }
                                }
                            },
                            {
                                title: "Backend Developer and Machine Learning Consultant",
                                body: "Between assignments I studied front end development to broaden my skillset.",
                                interval: {
                                    from: {
                                        year: 2023,
                                        month: "Mar"
                                    },
                                    to: {
                                        year: 2023,
                                        month: "Jul"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        title: "Tobii, Stockholm",
                        sections: [
                            {
                                title: "Data Operator and Developer",
                                body: "Summer and part time job. The main task was data collection but I was also tasked with writing automation scripts to streamline the process as a whole.",
                                interval: {
                                    from: {
                                        year: 2021,
                                        month: "Jun"
                                    },
                                    to: {
                                        year: 2021,
                                        month: "Sep"
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        />
        <Timeline 
            title="Education"
            items={
                [
                    {
                        title: "Royal Institute of Technology, Stockholm",
                        sections: [
                            {
                                title: "MSc in Machine Learning",
                                body: "",
                                interval: {
                                    from: {
                                        year: 2020,
                                        month: "Aug"
                                    },
                                    to: {
                                        year: 2023,
                                        month: "Mar"
                                    }
                                }
                            },
                            {
                                title: "BSc in Computer Science and Engineering",
                                body: "",
                                interval: {
                                    from: {
                                        year: 2017,
                                        month: "Aug"
                                    },
                                    to: {
                                        year: 2020,
                                        month: "Jun"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        title: "Budapest University of Technology and Economics, Budapest",
                        sections: [
                            {
                                title: "Exchange studies",
                                body: "",
                                interval: {
                                    from: {
                                        year: 2022,
                                        month: "Feb"
                                    },
                                    to: {
                                        year: 2022,
                                        month: "Jun"
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        />
        <SkillList 
            title="Skills"
            sections={
                [
                    {
                        emoji: "",
                        category: "Programming Languages",
                        skills: [
                            "Python",
                            "Go",
                            "Java",
                            "Swift",
                            "C",
                            "TypeScript",
                            "HTML",
                            "CSS",
                            "SQL",
                            "Prolog",
                            "Haskell"
                        ]
                    },
                    {
                        emoji: "",
                        category: "Cloud Providers",
                        skills: [
                            "AWS",
                            "Azure"
                        ]
                    },
                    {
                        emoji: "",
                        category: "Frameworks and Technologies",
                        skills: [
                            "Terraform",
                            "AWS CDK",
                            "Docker",
                            "Git",
                            "Github",
                            "REST APIs",
                            "GraphQL",
                            "SOAP",
                            "Postgres",
                            "SQL",
                            "NoSQL",
                            "MacOS",
                            "Ubuntu"
                        ]
                    }
                ]
            }
        />
        <SkillList 
            title="Languages"
            sections={
                [
                    {
                        emoji: "🇸🇪",
                        category: "Swedish",
                        skills: ["Mother tongue"]
                    },
                    {
                        emoji: "🇬🇧",
                        category: "English",
                        skills: ["Fluent"]
                    }
                    ,
                    {
                        emoji: "🇭🇺",
                        category: "Hungarian",
                        skills: ["B1"]
                    },
                    {
                        emoji: "🇪🇸",
                        category: "Spanish",
                        skills: ["A1"]
                    }
                ]
            }
        />
    </div>
</div>