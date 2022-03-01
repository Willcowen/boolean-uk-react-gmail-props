import Email from './Email'
function Emails(props) {
    return (
        <ul>
          {props.filteredEmails.map((email, index) => (
              <Email
              email={email}
              index={index}
              emailRead={email.read}
              emailStarred={email.starred}
              toggleRead={props.toggleRead}
              toggleStar={props.toggleStar}
              />
          ))}
        </ul>
    )
}

export default Emails