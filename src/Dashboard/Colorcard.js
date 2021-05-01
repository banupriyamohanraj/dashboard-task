export default function Colorcard(props){
    return <>
<div class="col-lg-6 mb-4">
        <div class={props.data.color}>
            <div class="card-body">
                {props.data.name}
                <div class="text-white-50 small">{props.data.code}</div>
            </div>
        </div>
    </div>
    </>
}