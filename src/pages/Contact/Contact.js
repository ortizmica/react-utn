import Nav from '../../components/Nav/Nav'
import { Fragment } from 'react';

export default function Contact() {
    return(
        <Fragment>
            <Nav itemMenu={"Contact"}/>
            <main className='w-100 vh-100 d-flex align-items-center justify-content-center'>
            <section className='bg-primary w-75 m-5 p-5'>
                <h2>Contact</h2>
                <h3>Leave us your information so we can contact you Name </h3>
                <form className="row g-3" action='' method='post'>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name='name'/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name='email'/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea id='message' name='message' className='w-100'>
                    </textarea>
                </div>
    
                    <div className="col-12">
                        <input type="submit" className="btn btn-danger" value="Send"/>
                    </div>
                </form> 
            </section>           
            </main>

        </Fragment>
    )
}