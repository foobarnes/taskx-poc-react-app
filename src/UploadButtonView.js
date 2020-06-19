import React from 'react';

import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import emitMetric from './metrics/metric.js';

export default function UploadButtonView(props) {

	const handleUploadClicked = () => {
		emitMetric("UploadButtonClicked#" + props.taskId);
		window.open("sms:1-615-397-9365", "_blank");
	};

	return (
		<div>
			<Button
				onClick={handleUploadClicked}
				variant="contained"
				color="default"
				size="small"
				startIcon={<CloudUploadIcon />}
			>
		        Submit
		    </Button>
	    </div>
    );
}