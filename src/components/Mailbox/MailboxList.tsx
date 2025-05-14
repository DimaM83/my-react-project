import Mailbox from "./Mailbox";

export default function MailboxList() {
    return (
        <Mailbox
            username="Jacob"
            messages={["Message 1", "Message 2", "Message 3", "Message 4"]}
        />
    );
}