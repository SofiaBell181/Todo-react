export default function InputField({handleSubmit , text, setText, onKey}){

    
    return(
        <>
            <label>
                <input className="i-user"  value={text} placeholder="Add new" onKeyDown={(e) => onKey(e)} onChange={(e) => setText(e.target.value)} type="text"/>
                <button className="btn-add" onClick={handleSubmit}>ADD YOUR THING</button>
            </label>
        </>
    )
}