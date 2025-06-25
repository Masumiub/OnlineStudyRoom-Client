import React from 'react';
import { Slide } from "react-awesome-reveal";

const FAQs = () => {
    return (
        <div className='my-20'>
            <div className='flex flex-col md:flex-row gap-10 p-5'>
                <div className='w-full md:w-4/12'>
                    <h2 className='text-5xl'>Frequently <span className='text-violet-500 font-bold'>Asked Questions</span></h2>
                </div>

                <div className='w-full md:w-8/12'>
                <Slide direction="up" cascade>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-3">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title font-semibold">What is Online Study Group?</div>
                        <div className="collapse-content text-sm">Online Study Group is a collaborative platform where students can create, complete, and evaluate assignments with their friends. It encourages group learning and peer feedback.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-3">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">Who can join?</div>
                        <div className="collapse-content text-sm">Anyone can join by signing up. Every registered user automatically becomes part of the group and can collaborate with others.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-3">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">How does assignment grading work?</div>
                        <div className="collapse-content text-sm">Once an assignment is submitted, it becomes available for other users to review and grade based on the predefined rubric or open evaluation.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-3">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">Can I see which assignments I have submitted or reviewed?</div>
                        <div className="collapse-content text-sm">Yes. You can view your own submissions, check the marks you received, and also keep track of the assignments you've reviewed for others.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-3">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">Is there any limit to the number of assignments I can create or submit?</div>
                        <div className="collapse-content text-sm">No. You’re free to create and complete as many assignments as you like. The more you engage, the more you grow with your group.
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-3">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">Is it secure?</div>
                        <div className="collapse-content text-sm">Yes. Your account is protected using Firebase Authentication and all data access is token-secured. Only authorized users can view or interact with your personal data.
                        </div>
                    </div>


                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default FAQs;