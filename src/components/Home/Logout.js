import { useContext } from 'react'
import { ClientContext } from '../../context/ClientContext'

const Logout = () => {
    const { setLoginDetails, handleLoading } = useContext(ClientContext)

    const handleLogout = () => {
        handleLoading(true)
        setTimeout(() =>{
            handleLoading(false)
            setLoginDetails()
        }, 3000)
        
    }
    // Button for Logout
    // TODO: might need to rethink component - maybe just use Button Component - can be custom or from framework
    return (
        <div className="flex ml-2 align-middle mt-2">
            <svg height="16pt" viewBox="0 -10 511.99959 511" width="12pt" xmlns="http://www.w3.org/2000/svg" className="mr-1 fill-current text-pink">
                <path d="m511.679688 268.640625-.023438-.167969c-4.609375-30.328125-22.222656-56.964844-48.328125-73.074218-12.816406-7.910157-26.980469-12.84375-41.53125-14.707032 10.675781-10.058594 19.234375-22.378906 24.953125-36.308594 11.652344-28.378906 10.246094-60.28125-3.832031-87.484374l-.09375-.183594c-5.738281-11.042969-17.929688-17.144532-30.351563-15.175782l-18.347656 2.90625-2.90625-18.34375c-1.964844-12.417968-11.535156-22.136718-23.808594-24.179687l-.160156-.027344c-30.269531-4.988281-61.039062 3.53125-84.429688 23.382813-11.484374 9.746094-20.554687 21.691406-26.820312 34.957031-6.269531-13.265625-15.339844-25.210937-26.820312-34.957031-23.390626-19.847656-54.167969-28.371094-84.433594-23.378906l-.15625.023437c-12.273438 2.042969-21.84375 11.761719-23.8125 24.179687l-2.902344 18.34375-18.347656-2.90625c-12.417969-1.96875-24.617188 4.132813-30.351563 15.175782l-.074219.140625c-14.097656 27.246093-15.503906 59.148437-3.855468 87.527343 5.722656 13.929688 14.28125 26.25 24.957031 36.308594-14.550781 1.863282-28.714844 6.796875-41.53125 14.703125-26.105469 16.113281-43.71875 42.75-48.335937 73.121094 0 .015625-.011719.09375-.015626.113281-1.851562 12.304688 4.433594 24.40625 15.636719 30.113282l16.550781 8.4375-8.433593 16.550781c-5.707031 11.199219-3.675781 24.683593 5.007812 33.503906.0625.070313.132813.136719.199219.203125 19.6875 19.917969 46.335938 30.96875 74.105469 30.96875 2.625 0 5.261719-.097656 7.902343-.296875 15.015626-1.132813 29.375-5.46875 42.242188-12.515625-2.726562 14.417969-2.410156 29.414062 1.152344 44.042969 7.253906 29.808593 27.144531 54.792969 54.585937 68.558593l.117188.054688v.003906c11.128906 5.5625 24.582031 3.328125 33.476562-5.5625l13.136719-13.136718 13.132812 13.136718c5.632813 5.628906 13.097657 8.589844 20.640626 8.589844 4.363281 0 8.753906-.988281 12.835937-3.027344l.140625-.070312c27.421875-13.753906 47.308594-38.738282 54.566406-68.542969 3.558594-14.632813 3.875-29.628906 1.148438-44.042969 12.867187 7.046875 27.230468 11.378906 42.246094 12.511719 2.640624.199219 5.273437.300781 7.898437.300781 27.765625 0 54.417969-11.054687 74.105469-30.96875l.15625-.15625c8.730468-8.867187 10.761718-22.355468 5.050781-33.554687l-8.433594-16.550781 16.550781-8.433594c11.203126-5.710938 17.488282-17.8125 15.640626-30.105469zm-255.554688 70.085937c5.515625 0 10 4.484376 10 10 0 5.515626-4.484375 10-10 10-5.511719 0-10-4.484374-10-10 0-5.515624 4.488281-10 10-10zm-.125-81.851562c-12.304688 0-22.316406-10.011719-22.316406-22.3125 0-12.304688 10.011718-22.316406 22.316406-22.316406 12.300781 0 22.3125 10.011718 22.3125 22.316406 0 12.300781-10.007812 22.3125-22.3125 22.3125zm-172.25-120.089844c-9.417969-22.933594-8.28125-48.71875 3.117188-70.742187.019531-.035157.035156-.070313.054687-.105469 1.765625-3.398438 5.574219-5.261719 9.476563-4.644531l28.222656 4.472656c2.621094.414063 5.300781-.226563 7.441406-1.785156 2.148438-1.5625 3.585938-3.90625 4-6.527344l4.46875-28.222656c.621094-3.90625 3.570312-6.949219 7.34375-7.578125l.125-.019532c24.464844-4.035156 49.335938 2.851563 68.238281 18.894532 18.902344 16.042968 29.746094 39.460937 29.746094 64.253906v15.597656c0 .210938.019531.414063.03125.621094v1.277344c0 5.523437 4.476563 10 10 10 5.519531 0 10-4.476563 10-10v-17.492188c0-24.792968 10.839844-48.214844 29.746094-64.257812 18.902343-16.042969 43.773437-22.929688 68.238281-18.894532.058594.007813.0625.011719.125.019532 3.769531.628906 6.722656 3.671875 7.339844 7.578125l4.46875 28.222656c.417968 2.621094 1.855468 4.96875 4 6.527344 2.148437 1.558593 4.824218 2.199219 7.441406 1.785156l28.226562-4.472656c3.898438-.617188 7.710938 1.246093 9.472657 4.644531.019531.035156.039062.074219.058593.109375 11.398438 22.023437 12.53125 47.804687 3.117188 70.738281-9.417969 22.9375-28.339844 40.484375-51.917969 48.148438l-84.34375 27.40625c-1.121093-1.808594-2.375-3.523438-3.746093-5.140625l26.359374-36.28125c2.699219.789062 5.496094 1.214843 8.335938 1.214843 1.578125 0 3.167969-.125 4.757812-.375 7.914063-1.253906 14.867188-5.515624 19.578126-11.996093 4.710937-6.484375 6.613281-14.414063 5.359374-22.328125-1.253906-7.914063-5.515624-14.867188-11.996093-19.578125-6.484375-4.707031-14.410157-6.613281-22.328125-5.359375-7.914063 1.253906-14.867188 5.515625-19.578125 11.996094-4.707031 6.484374-6.613281 14.414062-5.359375 22.328124.722656 4.542969 2.433594 8.765626 4.988281 12.429688l-26.285156 36.179688c-4.960938-2.046876-10.386719-3.179688-16.074219-3.179688s-11.113281 1.132812-16.070312 3.179688l-26.335938-36.246094c2.46875-3.617188 4.125-7.761719 4.832031-12.214844 1.253907-7.914062-.652343-15.84375-5.363281-22.328125-9.722656-13.382813-28.519531-16.355469-41.902344-6.632813-13.382812 9.71875-16.359375 28.519532-6.636718 41.902344 5.863281 8.066406 15.023437 12.351563 24.3125 12.351563 2.890624 0 5.792968-.429688 8.613281-1.277344l26.3125 36.214844c-1.371094 1.613281-2.625 3.328125-3.746094 5.136719l-84.34375-27.40625c-23.582031-7.660157-42.507813-25.207032-51.921875-48.144532zm233.371094 13.429688c-2.160156-1.570313-3.578125-3.886719-3.996094-6.523438-.417969-2.640625.214844-5.28125 1.785156-7.441406 1.570313-2.164062 3.886719-3.582031 6.527344-4 .527344-.085938 1.058594-.125 1.582031-.125 2.097657 0 4.132813.65625 5.855469 1.910156 2.164062 1.570313 3.582031 3.886719 4 6.527344.417969 2.636719-.214844 5.277344-1.785156 7.441406-1.570313 2.160156-3.886719 3.578125-6.527344 3.996094-2.632812.421875-5.28125-.214844-7.441406-1.785156zm-136.421875-2.0625c-3.238281-4.460938-2.246094-10.726563 2.214843-13.96875 4.460938-3.242188 10.726563-2.246094 13.96875 2.210937 1.570313 2.164063 2.203126 4.804688 1.785157 7.441407-.417969 2.640624-1.835938 4.957031-4 6.527343-4.457031 3.242188-10.726563 2.25-13.96875-2.210937zm-70.917969 220.015625c-24.714844 1.867187-48.890625-7.179688-66.3125-24.824219-.046875-.046875-.097656-.097656-.148438-.144531l.058594.054687c-2.679687-2.722656-3.277344-6.921875-1.484375-10.445312l12.972657-25.457032c2.507812-4.921874.554687-10.945312-4.367188-13.453124l-25.460938-12.972657c-3.523437-1.792969-5.507812-5.542969-4.9375-9.335937 0-.011719.015626-.101563.019532-.113282 3.722656-24.511718 17.957031-46.039062 39.058594-59.058593 21.09375-13.023438 46.71875-16.097657 70.300781-8.433594l84.339843 27.402344c-.078124 1.050781-.132812 2.105469-.132812 3.175781 0 1.074219.054688 2.136719.132812 3.191406l-42.613281 13.84375c-2.675781-3.460937-6.109375-6.320312-10.125-8.363281-7.136719-3.640625-15.265625-4.277344-22.886719-1.804687-7.621093 2.476562-13.824218 7.773437-17.460937 14.914062-3.636719 7.136719-4.277344 15.265625-1.800781 22.886719 2.476562 7.621093 7.769531 13.824219 14.910156 17.460937 4.28125 2.183594 8.917969 3.285156 13.589844 3.285156 3.117187 0 6.25-.492187 9.300781-1.484374 7.621094-2.476563 13.820313-7.769532 17.460937-14.910157 2.085938-4.097656 3.183594-8.519531 3.273438-12.988281l42.539062-13.820312c1.117188 1.808593 2.375 3.523437 3.746094 5.136718l-52.136718 71.757813c-14.574219 20.058593-37.113282 32.632812-61.835938 34.5zm46.589844-93.667969c-1.214844 2.378906-3.277344 4.144531-5.820313 4.972656-2.542969.824219-5.25.609375-7.628906-.601562-2.378906-1.214844-4.148437-3.28125-4.972656-5.820313-.824219-2.539062-.609375-5.25.601562-7.628906 1.214844-2.378906 3.28125-4.148437 5.820313-4.972656 1.015625-.328125 2.0625-.492188 3.101562-.492188 1.554688 0 3.101563.367188 4.527344 1.09375 2.378906 1.214844 4.144531 3.28125 4.972656 5.820313.824219 2.539062.609375 5.25-.601562 7.628906zm181.511718 140.410156c-5.863281 24.078125-21.925781 44.265625-44.128906 55.410156-.027344.011719-.058594.027344-.085937.042969-3.421875 1.707031-7.597657.976563-10.390625-1.816406l-20.207032-20.207031c-1.875-1.875-4.417968-2.925782-7.070312-2.925782s-5.195312 1.050782-7.070312 2.925782l-20.207032 20.207031c-2.796875 2.796875-6.972656 3.523437-10.390625 1.816406-.058593-.027343-.109375-.054687-.164062-.082031l.046875.023438c-22.160156-11.117188-38.234375-31.308594-44.097656-55.394532-5.867188-24.089844-.871094-49.410156 13.703124-69.46875l52.121094-71.742187c1.949219.804687 3.972656 1.464843 6.058594 1.96875v44.820312c-11.574219 4.164063-19.875 15.25-19.875 28.238281 0 16.539063 13.457031 30 30 30s30-13.460937 30-30c0-13.085937-8.421875-24.230468-20.125-28.324218v-44.734375c2.082031-.503907 4.105469-1.164063 6.054688-1.96875l52.125 71.742187c14.570312 20.058594 19.566406 45.378906 13.703124 69.46875zm149.078126-133.984375-25.460938 12.972657c-4.917969 2.507812-6.875 8.53125-4.367188 13.449218l12.972657 25.460938c1.785156 3.507812 1.203125 7.683594-1.511719 10.46875-.019531.023437-.042969.046875-.0625.066406-17.421875 17.644531-41.609375 26.6875-66.3125 24.824219-24.722656-1.867188-47.261719-14.441407-61.835938-34.5l-52.132812-71.757813c1.371094-1.613281 2.625-3.332031 3.746094-5.140625l42.617187 13.851563c.128907 4.375 1.226563 8.703125 3.273438 12.71875 3.636719 7.140625 9.839843 12.433594 17.460937 14.910156 3.050782.992188 6.183594 1.484375 9.300782 1.484375 4.667968 0 9.308593-1.105469 13.585937-3.285156 7.140625-3.636719 12.4375-9.839844 14.914063-17.460938 2.476562-7.621093 1.835937-15.75-1.800782-22.890625-3.640625-7.136718-9.839844-12.433594-17.460937-14.910156-7.621094-2.476562-15.75-1.835938-22.890625 1.800781-4.097656 2.089844-7.582032 5.023438-10.28125 8.582031l-42.535156-13.820312c.078124-1.054688.132812-2.113281.132812-3.1875 0-1.070312-.050781-2.128906-.132812-3.179688l84.339843-27.402343c23.578125-7.660157 49.203125-4.585938 70.304688 8.433593 21.097656 13.023438 35.332031 34.546876 39.046875 59.003907l.03125.183593c.566406 3.78125-1.417969 7.527344-4.941406 9.324219zm-131.855469-14.296875c.824219-2.539062 2.589843-4.605468 4.972656-5.820312 1.425781-.726563 2.96875-1.09375 4.527344-1.09375 1.039062 0 2.082031.164062 3.101562.496094 2.539063.824218 4.605469 2.589843 5.816407 4.96875 1.214843 2.378906 1.429687 5.089843.601562 7.628906-.824219 2.542968-2.589844 4.609375-4.96875 5.820312-2.378906 1.214844-5.089844 1.425782-7.628906.601563-2.542969-.824219-4.609375-2.589844-5.820313-4.972657-1.214843-2.378906-1.425781-5.089843-.601562-7.628906zm0 0"/><path d="m256 172.277344c2.628906 0 5.207031-1.066406 7.066406-2.929688 1.859375-1.871094 2.933594-4.4375 2.933594-7.070312 0-2.628906-1.070312-5.207032-2.933594-7.078125-1.859375-1.859375-4.4375-2.921875-7.066406-2.921875-2.632812 0-5.210938 1.0625-7.070312 2.921875-1.859376 1.871093-2.929688 4.449219-2.929688 7.078125 0 2.632812 1.066406 5.199218 2.929688 7.070312 1.859374 1.863282 4.4375 2.929688 7.070312 2.929688zm0 0"/></svg>
            <button onClick={handleLogout} className="text-pink font-bold">Sign Out</button>
        </div>
    )
}

export default Logout
