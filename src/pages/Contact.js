const Contact = ({currentContact}) => {
    return(
        <>
        <h1>{currentContact.name}</h1>
        <h2>{currentContact.phoneNumber}</h2>
        <h2>{currentContact.email}</h2>
        </>
    )
}

export default Contact;