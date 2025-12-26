// ===== ALL SERVICE MODALS =====
// This file contains all modal content for the services page

document.addEventListener('DOMContentLoaded', function () {
    // Create modals container
    const modalsContainer = document.createElement('div');
    modalsContainer.id = 'service-modals-container';
    document.body.appendChild(modalsContainer);

    // Define all modals content
    const modals = {
        // INDIVIDUAL THERAPY
        'individual-who': {
            title: 'Individual Therapy - Who It\'s For',
            content: `
                <p>Individual therapy is beneficial for anyone experiencing:</p>
                <ul>
                    <li>Depression, anxiety, or other mood disorders</li>
                    <li>Trauma or PTSD</li>
                    <li>Stress and life transitions</li>
                    <li>Grief and loss</li>
                    <li>Relationship difficulties</li>
                    <li>Low self-esteem or self-confidence</li>
                    <li>Addiction or substance use concerns</li>
                    <li>Eating disorders</li>
                    <li>OCD or other anxiety-related conditions</li>
                </ul>
            `
        },
        'individual-expect': {
            title: 'Individual Therapy - What to Expect',
            content: `
                <p>During your first session, your therapist will conduct an assessment to understand your concerns, goals, and history. Together, you'll develop a treatment plan.</p>
                <p>Subsequent sessions typically last 50 minutes and focus on working toward your goals through evidence-based therapeutic techniques.</p>
            `
        },
        'individual-duration': {
            title: 'Individual Therapy - Duration & Frequency',
            content: `
                <p>Sessions are typically <strong>50 minutes long</strong> and occur weekly or bi-weekly, depending on your needs.</p>
                <p>Treatment duration varies based on individual circumstances, but many clients see progress within <strong>8-12 sessions</strong>.</p>
            `
        },
        'individual-pricing': {
            title: 'Individual Therapy - Pricing',
            content: `
                <div class="pricing-highlight">
                    <p class="price-main">$150-$200 per session</p>
                </div>
                <p>We accept most major insurance plans and offer sliding scale fees based on income to ensure therapy is accessible to everyone.</p>
            `
        },

        // COUPLES COUNSELING
        'couples-issues': {
            title: 'Couples Counseling - Issues Addressed',
            content: `
                <p>We help couples work through:</p>
                <ul>
                    <li>Communication problems</li>
                    <li>Conflict resolution</li>
                    <li>Trust and infidelity</li>
                    <li>Intimacy and sexual concerns</li>
                    <li>Financial disagreements</li>
                    <li>Parenting differences</li>
                    <li>Life transitions (marriage, children, retirement)</li>
                    <li>Blended family challenges</li>
                </ul>
            `
        },
        'couples-premarital': {
            title: 'Pre-Marital Counseling',
            content: `
                <p>We offer pre-marital counseling to help couples prepare for marriage, discuss important topics, and build a strong foundation for their future together.</p>
                <p>Topics covered include communication styles, conflict resolution, financial planning, family expectations, and intimacy goals.</p>
            `
        },
        'couples-expect': {
            title: 'Couples Counseling - What to Expect',
            content: `
                <p>Sessions are typically <strong>75-90 minutes</strong> and involve both partners.</p>
                <p>Your therapist will help you identify patterns, improve communication, and develop healthier ways of relating to each other.</p>
            `
        },
        'couples-pricing': {
            title: 'Couples Counseling - Pricing',
            content: `
                <div class="pricing-highlight">
                    <p class="price-main">$175-$225 per session</p>
                </div>
                <p>We offer flexible scheduling including evening and weekend appointments.</p>
            `
        },

        // FAMILY THERAPY
        'family-dynamics': {
            title: 'Family Therapy - Dynamics Addressed',
            content: `
                <p>Family therapy helps with:</p>
                <ul>
                    <li>Parent-child relationships</li>
                    <li>Sibling conflicts</li>
                    <li>Blended family adjustments</li>
                    <li>Teen behavioral issues</li>
                    <li>Family transitions (divorce, remarriage, relocation)</li>
                    <li>Substance use affecting the family</li>
                    <li>Mental health concerns affecting family members</li>
                    <li>Communication breakdowns</li>
                </ul>
            `
        },
        'family-expect': {
            title: 'Family Therapy - What to Expect',
            content: `
                <p>Family therapy sessions typically include all family members or relevant members, depending on the situation.</p>
                <p>Sessions are <strong>75-90 minutes</strong> and focus on understanding family patterns and creating positive change.</p>
            `
        },
        'family-pricing': {
            title: 'Family Therapy - Pricing',
            content: `
                <div class="pricing-highlight">
                    <p class="price-main">$175-$225 per session</p>
                </div>
                <p>We work with families to find scheduling that accommodates everyone.</p>
            `
        },

        // GROUP THERAPY
        'group-offerings': {
            title: 'Group Therapy - Current Groups',
            content: `
                <div class="group-offerings">
                    <div class="group-item">
                        <h5>Depression Support Group</h5>
                        <p>Weekly group for individuals managing depression. Focuses on coping strategies, support, and understanding.</p>
                        <p><strong>Schedule:</strong> Tuesdays, 6:00-7:30 PM</p>
                    </div>
                    <div class="group-item">
                        <h5>Anxiety Management Group</h5>
                        <p>Learn evidence-based techniques to manage anxiety, including CBT and mindfulness practices.</p>
                        <p><strong>Schedule:</strong> Thursdays, 6:00-7:30 PM</p>
                    </div>
                    <div class="group-item">
                        <h5>Grief & Loss Support Group</h5>
                        <p>A compassionate space for those navigating loss and grief, with peer support and professional guidance.</p>
                        <p><strong>Schedule:</strong> Wednesdays, 6:00-7:30 PM</p>
                    </div>
                    <div class="group-item">
                        <h5>Substance Abuse Recovery</h5>
                        <p>Support group for individuals in recovery, focusing on relapse prevention and healthy coping.</p>
                        <p><strong>Schedule:</strong> Fridays, 6:00-7:30 PM</p>
                    </div>
                </div>
            `
        },
        'group-join': {
            title: 'How to Join a Group',
            content: `
                <p>All group members must complete an initial assessment to ensure the group is a good fit.</p>
                <p>Groups are typically <strong>8-12 weeks long</strong>, with rolling admission. Contact us to learn more about joining a group.</p>
            `
        },
        'group-pricing': {
            title: 'Group Therapy - Pricing',
            content: `
                <div class="pricing-highlight">
                    <p class="price-main">$50-$75 per session</p>
                </div>
                <p>More affordable than individual therapy while providing valuable peer support.</p>
            `
        },

        // CHILD & TEEN
        'childteen-approaches': {
            title: 'Child & Teen - Age-Specific Approaches',
            content: `
                <ul>
                    <li><strong>Play Therapy (ages 3-12):</strong> Uses play as a medium for expression and healing</li>
                    <li><strong>Art Therapy:</strong> Creative expression for processing emotions</li>
                    <li><strong>CBT for Teens:</strong> Age-appropriate cognitive-behavioral techniques</li>
                    <li><strong>Family-Involved Treatment:</strong> Parents and caregivers are integral to the process</li>
                </ul>
            `
        },
        'childteen-concerns': {
            title: 'Child & Teen - Common Concerns',
            content: `
                <ul>
                    <li>Anxiety and worry</li>
                    <li>Depression and mood changes</li>
                    <li>Behavioral issues</li>
                    <li>School-related stress</li>
                    <li>ADHD and attention concerns</li>
                    <li>Social skills and peer relationships</li>
                    <li>Trauma and abuse</li>
                    <li>Eating disorders</li>
                    <li>Self-harm and suicidal thoughts</li>
                </ul>
            `
        },
        'childteen-parents': {
            title: 'Child & Teen - Parent Involvement',
            content: `
                <p>We believe parents and caregivers are essential partners in their child's treatment.</p>
                <p>We provide regular updates, parent coaching, and family sessions as needed to ensure the best outcomes.</p>
            `
        },
        'childteen-pricing': {
            title: 'Child & Teen Services - Pricing',
            content: `
                <div class="pricing-highlight">
                    <p class="price-main">$150-$200 per session</p>
                </div>
                <p>We work with families to ensure treatment is accessible.</p>
            `
        },

        // ONLINE COUNSELING
        'online-platform': {
            title: 'Online Counseling - Platform Security',
            content: `
                <p>We use a secure, encrypted video platform that meets HIPAA requirements for protecting your privacy and confidentiality.</p>
                <p>All sessions are conducted through our secure telehealth portal with end-to-end encryption.</p>
            `
        },
        'online-benefits': {
            title: 'Online Counseling - Benefits',
            content: `
                <p>Online therapy provides the same evidence-based treatment as in-person sessions, with added convenience:</p>
                <ul>
                    <li>No travel time or transportation needed</li>
                    <li>More flexible scheduling options</li>
                    <li>Comfort of your own space</li>
                    <li>Accessible for those with mobility limitations</li>
                    <li>Continuity of care when traveling</li>
                </ul>
            `
        },
        'online-requirements': {
            title: 'Technology Requirements',
            content: `
                <p>You'll need a device with a camera and microphone (computer, tablet, or smartphone) and a stable internet connection.</p>
                <p>We'll provide instructions and technical support to ensure smooth sessions.</p>
            `
        },
        'online-insurance': {
            title: 'Online Counseling - Insurance Coverage',
            content: `
                <p>Most insurance plans cover telehealth services the same as in-person sessions.</p>
                <p>Check with your insurance provider for specific coverage details.</p>
            `
        },

        // SPECIALIZED PROGRAMS
        'specialized-iop': {
            title: 'Intensive Outpatient Program (IOP)',
            content: `
                <p>A structured program for individuals needing more intensive support than weekly therapy but not requiring inpatient care.</p>
                <p>Includes group therapy, individual sessions, and skills training.</p>
                <p><strong>Schedule:</strong> 3-4 days per week, 3 hours per day<br>
                <strong>Duration:</strong> 6-12 weeks</p>
            `
        },
        'specialized-emdr': {
            title: 'EMDR for Trauma',
            content: `
                <p>Specialized EMDR therapy for trauma, PTSD, and related conditions.</p>
                <p>Our certified EMDR therapists help process traumatic memories and reduce their impact.</p>
                <p><strong>Format:</strong> Individual sessions, 60-90 minutes</p>
            `
        },
        'specialized-eating': {
            title: 'Eating Disorder Treatment',
            content: `
                <p>Comprehensive treatment for anorexia, bulimia, binge eating disorder, and other eating concerns.</p>
                <p>Includes individual therapy, nutrition counseling, and medical coordination.</p>
                <p><strong>Approach:</strong> Multidisciplinary team approach</p>
            `
        },
        'specialized-substance': {
            title: 'Substance Abuse Counseling',
            content: `
                <p>Evidence-based treatment for substance use disorders, including individual therapy, group support, and relapse prevention strategies.</p>
                <p><strong>Programs:</strong> Individual and group options available</p>
            `
        },

        // PSYCHIATRIC SERVICES
        'psychiatric-medication': {
            title: 'Medication Management',
            content: `
                <p>For individuals who may benefit from medication as part of their treatment plan, our psychiatrist provides thorough evaluations, ongoing monitoring, and medication adjustments as needed.</p>
            `
        },
        'psychiatric-collaborative': {
            title: 'Collaborative Care Approach',
            content: `
                <p>Our psychiatrist works closely with your therapist to ensure coordinated care.</p>
                <p>Medication decisions are made collaboratively, with your input and informed consent.</p>
            `
        },
        'psychiatric-psychiatrist': {
            title: 'Our Psychiatrist',
            content: `
                <h4>Dr. James Martinez, MD</h4>
                <p><strong>Board-Certified Psychiatrist</strong></p>
                <p>Dr. Martinez has over 20 years of experience in psychiatric medicine, specializing in mood disorders, anxiety, and medication management.</p>
                <p>He believes in a holistic approach to mental health, combining medication when appropriate with therapy and lifestyle interventions.</p>
                <p><strong>Specialties:</strong> Depression, Anxiety, Bipolar Disorder, ADHD</p>
            `
        },
        'psychiatric-pricing': {
            title: 'Psychiatric Services - Pricing',
            content: `
                <div class="pricing-highlight">
                    <p class="price-main">Initial: $300<br>Follow-up: $150</p>
                </div>
                <p>Initial evaluations are 60 minutes. Follow-up appointments are typically 30 minutes.</p>
                <p>Most insurance plans cover psychiatric services.</p>
            `
        },

        // ASSESSMENT & TESTING
        'assessment-psychological': {
            title: 'Psychological Evaluations',
            content: `
                <p>Comprehensive assessments that evaluate cognitive functioning, emotional health, personality, and behavioral patterns.</p>
                <p>Useful for diagnostic clarification and treatment planning.</p>
            `
        },
        'assessment-adhd': {
            title: 'ADHD Testing',
            content: `
                <p>Thorough evaluation for Attention-Deficit/Hyperactivity Disorder, including clinical interviews, rating scales, and cognitive testing.</p>
                <p>Provides diagnosis and recommendations for treatment and accommodations.</p>
            `
        },
        'assessment-learning': {
            title: 'Learning Disability Assessments',
            content: `
                <p>Comprehensive evaluations for learning disabilities, including dyslexia, dyscalculia, and other learning differences.</p>
                <p>Includes recommendations for educational accommodations and interventions.</p>
            `
        },
        'assessment-pricing': {
            title: 'Assessment & Testing - Pricing',
            content: `
                <div class="pricing-highlight">
                    <p class="price-main">$800-$2,500</p>
                </div>
                <p>Pricing varies based on the type and complexity of evaluation.</p>
                <p>Assessments typically involve multiple sessions, including clinical interviews, standardized testing, and review of records.</p>
                <p>A comprehensive report is provided with findings and recommendations.</p>
                <p>Some insurance plans cover psychological testing.</p>
            `
        }
    };

    // Create modal HTML for each service
    for (const [modalId, data] of Object.entries(modals)) {
        const modalHTML = `
            <div class="service-modal" id="${modalId}-modal">
                <div class="modal-overlay" onclick="closeModal('${modalId}')"></div>
                <div class="modal-content">
                    <button class="modal-close" onclick="closeModal('${modalId}')">&times;</button>
                    <h3>${data.title}</h3>
                    ${data.content}
                    <div class="modal-cta">
                        <a href="contact.html" class="btn">Book Appointment</a>
                    </div>
                </div>
            </div>
        `;
        modalsContainer.innerHTML += modalHTML;
    }
});
