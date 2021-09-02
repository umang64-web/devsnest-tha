const Templates = ({ templates ,setmeme }) => {
    return (
        <div className="templates">
            {templates.map((template) => (
                <div key={template.id} className="template" onClick={()=>{
                    setmeme(template)
                }}>
                    <div style={{ backgroundImage: `url(${template.url})` }} className="image">
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Templates;