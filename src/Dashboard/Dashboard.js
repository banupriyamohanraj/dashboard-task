import Card from './Card'
import Earnings from './Earnings'
import Revenue from './Revenue'
import Project from './Project'
import Illustrations from './Illustrations'
import Approach from './Approach'
import Colorcard from './Colorcard'

export default function Dashboard() {

    let cardvalues = [
        {
            topic: 'Earnings (Monthly)',
            value: '$40,000',
            classname: 'card border-left-primary shadow h-100 py-2',
            icon: 'fas fa-calendar fa-2x text-gray-300',
            hasprogressbar: false
        },
        {
            topic: 'Earnings (Annual)',
            value: '$215,000',
            classname: 'card border-left-success shadow h-100 py-2',
            icon: 'fas fa-dollar-sign fa-2x text-gray-300',
            hasprogressbar: false
        },
        {
            topic: 'Tasks',
            value: '50%',
            classname: 'card border-left-info shadow h-100 py-2',
            icon: 'fas fa-clipboard-list fa-2x text-gray-300',
            hasprogressbar: true

        },
        {
            topic: 'Pending Requests',
            value: '18',
            classname: 'card border-left-warning shadow h-100 py-2',
            icon: 'fas fa-comments fa-2x text-gray-300',
            hasprogressbar: false
        }

    ]

    let colorcardval = [
        {
            name: 'Primary',
            code: '#4e73df',
            color: 'card bg-primary text-white shadow'
        },
        {
            name: 'Success',
            code: '#1cc88a',
            color: 'card bg-success text-white shadow'
        },
        {
            name: 'Info',
            code: '#36b9cc',
            color: 'card bg-info text-white shadow'
        },
        {
            name: 'Warning',
            code: '#f6c23e',
            color: 'card bg-warning text-white shadow'
        },
        {
            name: 'Danger',
            code: '#e74a3b',
            color: 'card bg-danger text-white shadow'
        },
        {
            name: 'Secondary',
            code: '#858796',
            color: 'card bg-secondary text-white shadow'
        },
        {
            name: 'Light',
            code: '#f8f9fc',
            color: 'card bg-light text-black shadow'
        },
        {
            name: 'Dark',
            code: '#5a5c69',
            color: 'card bg-dark text-white shadow'
        },
    ];
    return <>
        <div class="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>

            <div className="row">
                {
                    cardvalues.map((obj) => {
                        return <Card data={obj}></Card>
                    })

                }
            </div>
            <div className='row'>
                <div class="col-xl-8 col-lg-7">
                    <Earnings></Earnings>
                </div>
                <div class="col-xl-4 col-lg-5">
                    <Revenue></Revenue>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 mb-4">
                    <Project></Project>
                    <div class="row">
                        {
                            colorcardval.map((obj) => {
                                return <Colorcard data={obj}></Colorcard>
                            })
                        }
                    </div>
                </div>
                <div class="col-lg-6 mb-4">
                    <Illustrations></Illustrations>
                    <Approach></Approach>
                </div>
            </div>
        </div>
    </>

}