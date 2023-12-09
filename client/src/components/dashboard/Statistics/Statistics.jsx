import css from './Statistics.module.css'
import { BsArrowUpShort } from 'react-icons/bs'
import { groupNumber } from '../../../data'
import StatisticsChart from '../StatisticsChart/StatisticsChart'


const Statistics = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <span className={css.title}>Policy Holder</span>

            <div className={`${css.cards} grey-container`}>

                <div>
                    <div className={css.arrowIcon}>
                        <BsArrowUpShort />
                    </div>

                    <div className={css.card}>
                        <span>Insurance this month</span><span>Poorv Kumar</span>
                    </div>
                </div>

                <div className={css.card}>
                    <span>Items</span><span>Medical Treatment Policy</span>
                </div>

                <div className={css.card}>
                    <span>Policy Price</span><span>$ {groupNumber(1250)}</span>
                </div>

                <div className={css.card}>
                    <span>Daily Average</span><span>$ {groupNumber(2000)}</span>
                </div>
            </div>
            <div className={`${css.cards} grey-container`}>

                <div>
                    <div className={css.arrowIcon}>
                        <BsArrowUpShort />
                    </div>

                    <div className={css.card}>
                        <span>Insurance this month</span><span>Akash Kulkarni</span>
                    </div>
                </div>

                <div className={css.card}>
                    <span>Items</span><span>Health Insurance</span>
                </div>

                <div className={css.card}>
                    <span>Policy Price</span><span>$ {groupNumber(1000)}</span>
                </div>

                <div className={css.card}>
                    <span>Daily Average</span><span>$ {groupNumber(2344)}</span>
                </div>
            </div>
            <div className={`${css.cards} grey-container`}>

                <div>
                    <div className={css.arrowIcon}>
                        <BsArrowUpShort />
                    </div>

                    <div className={css.card}>
                        <span>Insurance this month</span><span>Harshit Chauhan</span>
                    </div>
                </div>

                <div className={css.card}>
                    <span>Items</span><span>Health Checkup</span>
                </div>

                <div className={css.card}>
                    <span>Policy Price</span><span>$ {groupNumber(900)}</span>
                </div>

                <div className={css.card}>
                    <span>Daily Average</span><span>$ {groupNumber(1234)}</span>
                </div>
            </div>
            <div className={`${css.cards} grey-container`}>

                <div>
                    <div className={css.arrowIcon}>
                        <BsArrowUpShort />
                    </div>

                    <div className={css.card}>
                        <span>Insurance this month</span><span>Aarav Nigam</span>
                    </div>
                </div>

                <div className={css.card}>
                    <span>Items</span><span>Medical Insurance</span>
                </div>

                <div className={css.card}>
                    <span>Policy Price</span><span>$ {groupNumber(850)}</span>
                </div>

                <div className={css.card}>
                    <span>Daily Average</span><span>$ {groupNumber(452)}</span>
                </div>
            </div>


            <StatisticsChart/>
        </div>
    )
}

export default Statistics