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
            root: {
                maxWidth: '160px',
            },
            path: {
                stroke: '#24c38e',
                strokeLinecap: 'butt',
            },
            trail: {
                stroke: 'rgba(0, 32, 51, 0.08)',
                strokeLinecap: 'butt',
                transform: 'rotate(0.25turn)',
                transformOrigin: 'center center',
            },
            text: {
                fill: '#002033',
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
