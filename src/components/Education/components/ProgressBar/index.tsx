import React from 'react';
import './style.scss';
import classNames from "classnames";
import {CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ProgressBarProps {
    progress: number;
    totalTasks: number;
    rate?: boolean;

}

const ProgressBar: React.FC<ProgressBarProps> = ({
                                                     progress,
                                                     totalTasks,
                                                     rate = false,
                                                 }) => {

    return (
        <CircularProgressbarWithChildren styles={{
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
                stroke: '#24c38e',
                strokeLinecap: 'butt',
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
                // Trail color
                stroke: 'rgba(0, 32, 51, 0.08)',
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'butt',
                // Rotate the trail
                transform: 'rotate(0.25turn)',
                transformOrigin: 'center center',
            },
            // Customize the text
            text: {
                // Text color
                fill: '#002033',
                // Text size
                fontSize: '16px',
            },

        }} className={classNames("progress-bar", rate ? "progress-bar_big" : "progress-bar_small")} value={progress}
                                         maxValue={totalTasks}>
            {rate && (
                <div
                    className="progress-bar-text font2XL"
                >
                    {progress}/{totalTasks}
                    <span className='progress-bar-secondary-text fontS'>заданий
                    </span>
                </div>
            )}

        </CircularProgressbarWithChildren>
    );
};

export default ProgressBar;
