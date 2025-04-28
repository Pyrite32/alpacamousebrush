import InformationCircleIcon from '@heroicons/react/16/solid/InformationCircleIcon';
import CodeBracketIcon from '@heroicons/react/16/solid/CodeBracketIcon';
import ArrowTopRightOnSquare from '@heroicons/react/16/solid/ArrowTopRightOnSquareIcon'
import MoonIcon from '@heroicons/react/16/solid/MoonIcon'

export default function Navigation() {
    return (
        <nav className="w-full">
            <ul className="w-full flex flex-row justify-between">
                <li className="">
                    <h3>
                        Alpaca Mouse Brushes
                    </h3>
                </li>
                <li>
                    <ul className='flex flex-row gap-4 flex-1/3'>
                        <li className='flex flex-row'>
                            <h4>
                                About
                            </h4>
                            <InformationCircleIcon width={16} />
                        </li>
                        <li className='flex flex-row'>
                            <h4>
                                Source code
                            </h4>
                            <CodeBracketIcon width={16} />
                        </li>
                        <li className='flex flex-row'>
                            <h4>
                                AlpacaThemes
                            </h4>
                            <ArrowTopRightOnSquare width={16} />
                        </li>
                    </ul>
                </li>
                <li className='flex flex-row'>
                    <button>
                        <MoonIcon width={16}/>
                    </button>
                    <button className='flex flex-row'>
                        Login
                        <ArrowTopRightOnSquare width={16}/>
                    </button>
                </li>

            </ul>
        </nav>
    )
}