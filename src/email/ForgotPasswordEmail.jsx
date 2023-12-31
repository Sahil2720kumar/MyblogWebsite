import {
    Body,
    Container,
    Column,
    Head,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
    Button
} from "@react-email/components";
import React from "react";
import Image from "next/image";

const baseUrl = process.env.BASE_URL;

const ForgotPasswordEmail = ({ params }) => {
    const { username, updatedDate, url } = params;
    function timeFormatFun(updatedDate) {
        const timestamp = updatedDate; // Convert seconds to milliseconds
        const date = new Date(timestamp);

        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
            timeZoneName: "short"
        };

        const formattedDate = date.toLocaleString("en-US", options);

        return formattedDate; // Outputs: "June 25, 2023 12:32:38 AM UTC"
    }

    const formattedDate = timeFormatFun(updatedDate);

    return (
        <Html>
            <Head />
            <Preview>
                You applied for forgot password for your DailyLearn account
            </Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={logo}>
                        DailyLearn
                    </Section>
                    <Section style={sectionsBorders}>
                        <Row>
                            <Column style={sectionBorder} />
                            <Column style={sectionCenter} />
                            <Column style={sectionBorder} />
                        </Row>
                    </Section>
                    <Section style={content}>
                        <Text style={paragraph}>Hi {username},</Text>
                        <Text style={paragraph}>
                            You applied for forgot password for your DailyLearn
                            account on {formattedDate}. If this was you, then no
                            further action is required.
                        </Text>
                        <Text style={paragraph}>
                            However, if you did NOT perform this password
                            change, please
                            <Link href={url} style={link}>
                                {" "}
                                reset your account password
                            </Link>{" "}
                            immediately.
                        </Text>
                        <Text style={paragraph}>
                            Remember to use a password that is both strong and
                            unique to your DailyLearn account. To learn more
                            about how to create a strong and unique password,
                            <Link href="#" style={link}>
                                {" "}
                                click here.
                            </Link>
                        </Text>
                        <Button pX={10} pY={10} style={button} href={url}>
                            Reset Password
                        </Button>
                        <Text style={paragraph}>
                            Still have questions? Please contact us
                            <Link href="#" style={link}>
                                {" "}
                                DailyLearn Support
                            </Link>
                        </Text>
                        <Text style={paragraph}>
                            Thanks,
                            <br />
                            DailyLearn Support Team
                        </Text>
                    </Section>
                </Container>

                <Section style={footer}>
                    <Text style={{ textAlign: "center", color: "#706a7b" }}>
                        © 2024 DailyLearn, All Rights Reserved <br />
                        Kali Bari Road, Dibrugarh, Assam
                    </Text>
                </Section>
            </Body>
        </Html>
    );
};

export default ForgotPasswordEmail;

const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";

const main = {
    backgroundColor: "#efeef1",
    fontFamily
};

const paragraph = {
    lineHeight: 1.5,
    fontSize: 14,
    color:"white"
};

const container = {
    width: "580px",
    margin: "30px auto",
    backgroundColor: "#ffffff"
};

const footer = {
    width: "580px",
    margin: "0 auto"
};

const content = {
    padding: "5px 50px 10px 60px"
};

const logo = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px",
    fontSize:"30px",
    fontWeight: "bold",
    color: "#656ee8",
    textAlign:"center"
};

const sectionsBorders = {
    width: "100%",
    display: "flex"
};

const sectionBorder = {
    borderBottom: "1px solid rgb(238,238,238)",
    width: "249px"
};

const sectionCenter = {
    borderBottom: "1px solid rgb(145,71,255)",
    width: "102px"
};

const link = {
    textDecoration: "underline"
};

const button = {
    backgroundColor: "#656ee8",
    borderRadius: "5px",
    padding:"4px 6px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    width: "50%"
};
