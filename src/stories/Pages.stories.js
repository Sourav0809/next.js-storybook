import CameraDetails from "../pages/CameraDetails"

export default {
    title: "Pages",
    component: CameraDetails,
    tags: ['autodocs'],
}

const Template = args => <CameraDetails {...args} />

export const cameradetails = Template.bind({})

cameradetails.args = {
    recentRecordings: [
        {
            imagePath: 'https://s3-alpha-sig.figma.com/img/858f/7625/7e1bdb331fa205fba9173b96b7ca0c1b?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CT99V2TmDRmmmDI9bsgWIWy-HdHsdCdsHR4ndFjR04YfvS84GYzq4xNjlsu~2NB6NWGQPOvD2n7vWYeFliiz7BGmghZSdUEUc2KRGViVbJhPl50zd2xbd~V~NjySQwi3BcMyx0rGQkssVWr-4uQA6~Yh~YyfKsZYiKK2GoQe-680zDoIzxa-3VrUV9SrUNjV9UxHqYKT7jsBZi6kBptlKpuOILPqfCuFqAp6~b9G4xlW6a2ekMmtOrOOV-LGecNBPrxcsjdB5mMIevQcJAPYTJLCqxf-e4kgnKv4XAsAS-zHw0yrBhnhGAvLTgb8s7cRdj9Zk6RDvSFuqq6OMTbWIw__',
            name: "Recording_0121",
            time: "Today, 04:42 pm"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/275c/b9b2/49c858c057e890366235bbdf0ee4a07e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BDGSpQALLhZrrqE2-FJTM3fEhLjkwt~ImXIzJ5qkqaYE9ZBhQKErXQWSOqNszs4aluL5ws1U8rz01nSeMJ9znnWg7TSJg2FlL7snL~~Klr6a1oaRfPY0lsFyAoct~F5jb3mx6jxF0Qd1aSGWkFKZPgMBjMEdDnY271TScVOt3KbaBWlwO0kXewOiQydJdgoOv39qRwEWoIJ~NSOeBQPAeoj-2ZzOID1lLgYRT51bqSXBiv61e7iRZwBMdQUlSwRVkmwdB9MdbAfqeW2-IRcTgIO17KMhlkMQ5vz0AvVMeX2COnoPQz~lGw33~EEa4uQ1HgPvPNU5GO4QD4HE8QXhgA__",
            name: "Recording_0121",
            time: "Today, 02:14 pm"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/d170/9cd9/4b1df7558cb0350eff0c6b0c4e231245?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WXTp-cjs7eZbesuBH00OScUiG~UVibjVrU3jMmSMqCzSQMXszuTlObWvDNdoWBP4kptjS3rZ7r0P8viXHmqcGxloAZOd5U5XPxjROHrzfsr267fwhJ7CCWk5zVpR5b8zUAb7UeRt9pTI8OoTSFqeXLx87F4OuLLq4dP7Vv07CHA0j~BywjJiVtICSBJgjG088Mr-XTVa6bR9cpW7MsmmrTrV0MFcQjCBv2YdcPCL~E8oMqur8dKW2~rIK~BcyNEsQCAAKp3tvoBluUOpNd2itlqCTZeOtIwH1IABNFqptAsPg4U7OUIvOmmWIUtGBbGRg889C0UXMaOsrusTsUA9HA__",
            name: "Recording_0121",
            time: "Today, 02:09 pm"
        },
        {
            imagePath: "https://s3-alpha-sig.figma.com/img/858f/7625/7e1bdb331fa205fba9173b96b7ca0c1b?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CT99V2TmDRmmmDI9bsgWIWy-HdHsdCdsHR4ndFjR04YfvS84GYzq4xNjlsu~2NB6NWGQPOvD2n7vWYeFliiz7BGmghZSdUEUc2KRGViVbJhPl50zd2xbd~V~NjySQwi3BcMyx0rGQkssVWr-4uQA6~Yh~YyfKsZYiKK2GoQe-680zDoIzxa-3VrUV9SrUNjV9UxHqYKT7jsBZi6kBptlKpuOILPqfCuFqAp6~b9G4xlW6a2ekMmtOrOOV-LGecNBPrxcsjdB5mMIevQcJAPYTJLCqxf-e4kgnKv4XAsAS-zHw0yrBhnhGAvLTgb8s7cRdj9Zk6RDvSFuqq6OMTbWIw__",
            name: "Recording_0121",
            time: "Today, 01:11 pm"
        },
    ],

    cameraDetails: {
        imagePath: 'https://s3-alpha-sig.figma.com/img/dbe5/8599/027f88064c915fe23e7da6a8db04d152?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mRUeeWZLMDRTwVcNy7sdYzt9T-8YC3bLNNnu8DjbA9G6Cg5zf8WsK~T4EGrcznM3SxuhBpig9jt53HctdWVHgFcaVemkmOONgdhrHBkZiPMC2cHCeowXY8CTJ7P6ckitUJezqRBNhESim5aC4XWarGsiaia-dkRNS4Env7EBOj4CHBP50rPIPQ0O1drmIOsNqZD8zRocld3Wz62pBmUHf5PE-e5x0E2X0kMMWITLlNYw6Jlul0CKSC8xiq~WJcs-ZjWFWDYMyA4mJ4Vv1YKrAMFNnJiOY6OFN3NyxQ3hCh6~nxTZaEfjw9S2p-np5KK0Zw~TaPcdNfa~8vlQ5kSE5Q__',
        location: "Coimbatore",
        city: "Coimbatore",
        timezone: 'Delhi-india',
        dateAdded: "Aug 03, 2023 12:01:42 PM",
        lastUpdate: "Aug 03, 2023 12:01:42 PM",
        manufacture: "ADT",
        RTSP_Url: ""
    },

    healthLogs: [
        "Today, 04:37 pm: Activated",
        "23 Aug, 02:22 pm: Deactivated",
        "21 Aug, 05:12 am: Activated",
        "20 Aug, 02:12 am: Deactivated",
        "19 Aug, 02:12 am: Deactivated"
    ]
}

