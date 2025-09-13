<script>
	import ContactInformation from "../../components/ContactInformation.svelte";
	import SkillList from "../../components/SkillList.svelte";
	import Timeline from "../../components/Timeline.svelte";

</script>
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
        phoneNumer="073-518 41 92"
        emailAddress="erik@zetterstrom.cloud"
    />
    <Timeline
        title="Work experience"
        items={
            [
                {
                    title: "FrontFlow, Stockholm",
                    sections: [
                        {
                            title: "Techlead",
                            body: "Working as a teach lad and doing important stuff.",
                            interval: {
                                from: {
                                    year: 2024,
                                    month: "Jan"
                                },
                                to: null
                            }
                        },
                        {
                            title: "Backend developer",
                            body: "Backend and shiii you know.",
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
                            body: "Consultant assignment via HiQ.",
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
                            title: "Backend developer and Machine Learning consultant",
                            body: "SOmehting",
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
                            title: "Data operator",
                            body: "Summer and part time job.",
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
                // {
                //     title: "Dataoperatör",
                //     subtitle: "Tobii, Stockholm",
                //     body: "Sommar- och deltidsjobb",
                //     interval: {
                //         from: {
                //             year: 2021,
                //             month: "Jun"
                //         },
                //         to: {
                //             year: 2021,
                //             month: "Sep"
                //         }
                //     }
                // }
            ]
        }
    />
    <!-- <Timeline
        title="Utbildning"
        items={
            [
                {
                    time: "feb. 2022 - jun. 2022",
                    title: "Utbytesstudier",
                    subtitle: "Budapest University of Technology and Economics, Budapest, Ungern",
                    body: ""
                },
                {
                    time: "aug. 2017 - jun. 2023",
                    title: "Civilingenjörsutbildning i datateknik, master i maskininlärning",
                    subtitle: "Kungliga Tekniska högskolan, Stockholm",
                    body: ""
                }
            ]
        }
    /> -->
    <!-- <SkillList 
        title="Kunskapsområden"
        sections={[
            {
                category: "Programmerings- och övriga tekniska språk",
                skills: ["Python", "Go", "Java", "Swift", "Javascript", "Typescript", "HTML", "CSS", "C", "SQL", "Prolog", "Haskel"]
            },
            {
                category: "Ramverk och teknologier",
                skills: ["Terraform", "AWS", "Docker", "REST-API:er", "Microsoft Graph", "GraphQL", "SO-AP", "Postgres", "SQL", "NoSQL", "Postman", "PyTorch", "VS Code", "SwiftUI", "XCode", "Ubuntu", "MongoDB", "Git", "Github"]
            }
        ]}
    /> -->
</div>

<style>
    .cv {
        padding-top: 2rem;
        padding-left: clamp(2rem, 3vw, 3rem);
        padding-right: clamp(2rem, 3vw, 3rem);
        display: flex;
        flex-direction: column;
    }
</style>