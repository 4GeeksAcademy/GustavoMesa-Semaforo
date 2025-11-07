import { useState } from "react"

export const TrafficLight = () => {

    const [activeLightStatus, setActiveLightStatus] = useState({
        red: `secondary`,
        yellow: `secondary`,
        green: `secondary`,
        title: `Fuera de servicio - presiona cualquier luz para comenzar`,
        animationRed: ` `,
        animatinYellow: ``,
        animationGreen: ''
    })

    const handleStop = () => {

        if (activeLightStatus.red === 'danger') {

            setActiveLightStatus({
                red: 'secondary',
                yellow: 'secondary',
                green: 'secondary',
                title: 'Fuera de servicio - presiona cualquier luz para comenzar',
                animationRed: ''
            })
        } else {
            setActiveLightStatus({
                red: 'danger',
                yellow: 'secondary',
                green: 'secondary',
                title: 'Alto - Detente',
                animationRed: 'red'

            })
        }

    }

    const handleCaution = () => {

        if (activeLightStatus.yellow === 'warning') {

            setActiveLightStatus({
                red: 'secondary',
                yellow: 'secondary',
                green: 'secondary',
                title: 'Fuera de servicio - presiona cualquier luz para comenzar',
                animatinYellow: ''
            })
        } else {
            setActiveLightStatus({
                red: 'secondary',
                yellow: 'warning',
                green: 'secondary',
                title: 'Precaución - Reduce la velocidad',
                animatinYellow: 'yellow'
            })
        }
    }

    const handleAvance = () => {

        if (activeLightStatus.green === 'success') {

            setActiveLightStatus({
                red: 'secondary',
                yellow: 'secondary',
                green: 'secondary',
                title: 'Fuera de servicio - presiona cualquier luz para comenzar',
                animationGreen: ` `
            })
        } else {
            setActiveLightStatus({
                red: 'secondary',
                yellow: 'secondary',
                green: 'success',
                title: 'Avanza - Puedes continuar',
                animationGreen: 'green'
            })
        }
    }

    return (
        <div >
            <h1 className="fs-3">
                {activeLightStatus.title}
            </h1>
            <div className="col-1 d-flex flex-column align-items-center mx-auto m-5 bg-dark rounded-4">
                <button onClick={handleStop} type="button" className={`btn btn-${activeLightStatus.red} glow-${activeLightStatus.animationRed}  rounded-circle btn-circle`}></button>
                <button onClick={handleCaution} type="button" className={`btn btn-${activeLightStatus.yellow} glow-${activeLightStatus.animatinYellow}   rounded-circle btn-circle`}></button>
                <button onClick={handleAvance} type="button" className={`btn btn-${activeLightStatus.green} glow-${activeLightStatus.animationGreen} rounded-circle btn-circle`}></button>
            </div>
        </div>
    )
}