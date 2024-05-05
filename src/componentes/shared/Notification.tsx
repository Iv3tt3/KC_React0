
export default function NotificationMSG ({className, msg, ...props}:{className:string, msg:string}) {
        
    return (
        <div className={className} {...props}>
            <p>{msg}</p>
        </div>
    );
};