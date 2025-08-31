<script>
	import ContactInformation from "../../components/ContactInformation.svelte";
	import SkillList from "../../components/SkillList.svelte";
	import Timeline from "../../components/Timeline.svelte";

</script>
<div class="p-15">
    <h2>Kontaktuppgifter</h2>
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
        title="Arbetslivserfarenhet"
        items={
            [
                {
                    time: "jan. 2024 -",
                    title: "Techlead och backendutvecklare",
                    subtitle: "FrontFlow, f.d. Violet Automation, Stockholm",
                    body: ""
                },
                {
                    time: "nov. 2023 - jan. 2024",
                    title: "Backendutvecklare",
                    subtitle: "FrontFlow, f.d. Violet Automation, Stockholm",
                    body: ""
                }
                ,
                {
                    time: "mar. 2023 - jul. 2023",
                    title: "Konsult inom backendutveckling och maskininlärning",
                    subtitle: "HiQ, Stockholm",
                    body: ""
                },
                {
                    time: "mar. 2023 - maj. 2023",
                    title: "Maskininlärningsingenjör",
                    subtitle: "Pinpoint estimates, Stockholm",
                    body: "Konsultuppdrag via HiQ"
                },
                {
                    time: "jun. 2021 - sep. 2021",
                    title: "Dataoperatör",
                    subtitle: "Tobii, Stockholm",
                    body: "Sommar- och deltidsjobb"
                }
            ]
        }
    />
    <Timeline
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
    />
    <SkillList 
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
    />
</div>