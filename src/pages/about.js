import { resources, contactDetails } from '../constants.js';
import LayoutSimple from '../components/LayoutSimple';
import CoffeeButton from '../components/BuyMeACoffeeButton';

const ContactDetail = ({ title, label, href }) => (
	<li>
		{title}:{' '}
		<a href={href}>
			{label}
		</a>
	</li>
);


const Resource = ({ label, href, description }) => (
	<div className="mv16">
		<h4>
			{label}
		</h4>
		<div className="ph16">
			<a href={href} target="_blank" rel="noreferrer">
				{href}
			</a>
			<p className="mt16">
				{description}
			</p>
		</div>
	</div>
);


export default function About() {
	return (
		<LayoutSimple title="About">
			<div className="tc">
				<div className="dib tl w-100 maw768">
					<p>
						Hi there,
					</p>
					<p>
						To solve my own curiosity, I put together this dashboard to track
						Ontario's Covid-19 numbers. Many other folks have found it useful,
						and I've done my best to keep it accurate and up to date, as well as
						add new plots and data that y'all have suggested.
					</p>
					<p>
						Feel free to get in touch:
					</p>
					<CoffeeButton />
					<ul>
						{contactDetails.map((detail) => (
							<ContactDetail key={detail.title} {...detail} />
						))}
					</ul>
					<div className="mv16">
						<h2>
							Data and resources
						</h2>
						{resources.map((resource) => (
							<Resource key={resource.label} {...resource} />
						))}
					</div>
				</div>
			</div>
		</LayoutSimple>
	);
}
