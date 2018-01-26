import React, {Component} from 'react';
class Contact extends Component {
    render() {
        return (
            <div className="constainer-fluid">
                {/*<h1 className="portfolioTitle"> Contact</h1>*/}
                <div className="row">
                    <div className="first">

                        <div className="container">
                            <h2>Contact</h2>
                            <form className="form-horizontal" action="/action_page.php">
                                <div className="form-group">
                                    <label className="control-label col-sm-2" for="email">Email:</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="email"
                                               placeholder="Enter email" name="email"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2" for="pwd">Password:</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" id="pwd"
                                               placeholder="Enter password" name="pwd"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <div className="checkbox">
                                            <label><input type="checkbox" name="remember"/> Remember me </label>
                                            <div class="form-group">
                                                <div class="col-sm-offset-2 col-sm-10">
                                                    <button type="submit" class="btn btn-default">Submit</button>
                                                    <div class="sec">
                                                        <p>New Line</p>
                                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                        accusantium doloremque
                                                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                                        veritatis et quasi architecto
                                                        beatae vitae dicta sunt explicabo.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Contact;
