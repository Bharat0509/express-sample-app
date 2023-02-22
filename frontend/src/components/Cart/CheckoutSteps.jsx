import { Step, StepLabel, Stepper, Typography } from '@material-ui/core'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import './CheckoutSteps.css'
const CheckoutSteps = ({ activeStep }) => {
    const steps = [
        {
            label: <Typography>Shipping Details</Typography>,
            icon: <LocalShippingIcon />
        },
        {
            label: <Typography>Confirm Order</Typography>,
            icon: <LibraryAddCheckIcon />
        },
        {
            label: <Typography>Payment</Typography>,
            icon: <AccountBalanceIcon />
        }
    ]

    const stepStyle = {
        boxSizing: "border-box"
    }
    return (
        <>
            <Stepper activeStep={1} alternativeLabel>
                {steps.map((item) => (
                    <Step key={item.name}>
                        <StepLabel>{item.name}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </>
    )
}

export default CheckoutSteps