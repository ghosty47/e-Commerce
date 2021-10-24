import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"


const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${({color}) => color };
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;

`


const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.div`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.div`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo> SAM. </Logo>
                <Desc>
                    SAM is Nigeria’s number one online Shopping destination.We pride ourselves in having
                    everything you could possibly need for life and living at the best prices than anywhere else.
                    Our access to Original Equipment Manufacturers and premium sellers gives us a wide range of 
                    products at very low prices. Some of our popular categories include electronics, mobile phones,
                    computers, and a whole lot more from premium brands.
                </Desc>

                <SocialContainer>
                    <SocialIcon color='3b5999'>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color='e4405f'>
                        <Instagram/>
                    </SocialIcon>   
                    <SocialIcon color='55acee'>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color='0077b5'>
                        <LinkedIn/>
                    </SocialIcon>              
                </SocialContainer>
            </Left>
            <Center>
                <Title> Useful Links </Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms & Conditions</ListItem>

                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: '10px'}}/>
                    Bode Thomos Street, Hajj Camp Abuja.
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: '10px'}}/>
                    +234-813-928-9312
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: '10px'}}/>
                    contact@usoroh.dev
                </ContactItem>

                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
            </Right>

        </Container>
    )
}

export default Footer
