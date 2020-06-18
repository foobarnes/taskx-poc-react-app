import React from 'react';

import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default function UploadButtonView() {

	const handleUploadClicked = () => {
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