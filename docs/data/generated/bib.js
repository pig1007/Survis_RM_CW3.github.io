﻿const generatedBibEntries = {
    "L1": {
        "abstract": " Abstract In this paper, we present a fast, robust, and completely automatic method for translational alignment of hand-held photographs. The technique employs percentile threshold bitmaps to accelerate image operations and avoid problems with the varying exposure levels used in high dynamic range (HDR) photography. An image pyramid is constructed from grayscale versions of each exposure, and these are converted to bitmaps which are then aligned horizontally and vertically using inexpensive shift and difference operations over each image. The cost of the algorithm is linear with respect to the number of pixels and effectively independent of the maximum translation. A three million pixel exposure can be aligned in a fraction of a second on a contemporary microprocessor using this technique.",
        "author": " Greg   Ward ",
        "doi": "10.1080/10867651.2003.10487583",
        "eprint": "https://doi.org/10.1080/10867651.2003.10487583",
        "journal": "Journal of Graphics Tools",
        "number": "2",
        "pages": "17-30",
        "publisher": "Taylor & Francis",
        "title": "Fast, Robust Image Registration for Compositing High Dynamic Range Photographs from Hand-Held Exposures",
        "type": "article",
        "url": "https://doi.org/10.1080/10867651.2003.10487583",
        "volume": "8",
        "year": "2003"
    },
    "L10": {
        "abstract": "The paper presents a novel method, Zero-Reference Deep Curve Estimation (Zero-DCE), which formulates light enhancement as a task of image-specific curve estimation with a deep network. Our method trains a lightweight deep network, DCE-Net, to estimate pixel-wise and high-order curves for dynamic range adjustment of a given image. The curve estimation is specially designed, considering pixel value range, monotonicity, and differentiability. Zero-DCE is appealing in its relaxed assumption on reference images, i.e., it does not require any paired or unpaired data dur- ing training. This is achieved through a set of carefully formulated non-reference loss functions, which implicitly measure the enhancement quality and drive the learning of the network. Our method is efficient as image enhancement can be achieved by an intuitive and simple nonlinear curve mapping. Despite its simplicity, we show that it general- izes well to diverse lighting conditions. Extensive experi- ments on various benchmarks demonstrate the advantages of our method over state-of-the-art methods qualitatively and quantitatively. Furthermore, the potential benefits of our Zero-DCE to face detection in the dark are discussed.",
        "archiveprefix": "arXiv",
        "author": "Chunle Guo and Chongyi Li and Jichang Guo and Chen Change Loy and Junhui Hou and Sam Kwong and Runmin Cong",
        "doi": "10.48550/arXiv.2001.06826",
        "eprint": "2001.06826",
        "keywords": "",
        "primaryclass": "cs.CV",
        "title": "Zero-Reference Deep Curve Estimation for Low-Light Image Enhancement",
        "type": "misc",
        "url": "https://doi.org/10.48550/arXiv.2001.06826",
        "year": "2020"
    },
    "L2": {
        "abstract": "Abstract We propose a technique for fusing a bracketed exposure sequence into a high quality image, without converting to High dynamic range (HDR) first. Skipping the physically based HDR assembly step simplifies the acquisition pipeline. This avoids camera response curve calibration and is computationally efficient. It also allows for including flash images in the sequence. Our technique blends multiple exposures, guided by simple quality measures like saturation and contrast. This is done in a multiresolution fashion to account for the brightness variation in the sequence. The resulting image quality is comparable to existing tone mapping operators.",
        "author": "Mertens, T. and Kautz, J. and Van Reeth, F.",
        "doi": "10.1111/j.1467-8659.2008.01171.x",
        "eprint": "https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1467-8659.2008.01171.x",
        "journal": "Computer Graphics Forum",
        "keywords": "high dynamic range photography, image fusion, image pyramids, I.4.8 Image Processing: Scene Analysis \u2013 Photometry, Sensor Fusion",
        "number": "1",
        "pages": "161-171",
        "title": "Exposure Fusion: A Simple and Practical Alternative to High Dynamic Range Photography",
        "type": "article",
        "url": "https://doi.org/10.1111/j.1467-8659.2008.01171.x",
        "volume": "28",
        "year": "2009"
    },
    "L3": {
        "abstract": "Typical video footage captured using an off-the-shelf camcorder suffers from limited dynamic range. This paper describes our approach to generate high dynamic range (HDR) video from an image sequence of a dynamic scene captured while rapidly varying the exposure of each frame. Our approach consists of three parts: automatic exposure control during capture, HDR stitching across neighboring frames, and tonemapping for viewing. HDR stitching requires accurately registering neighboring frames and choosing appropriate pixels for computing the radiance map. We show examples for a variety of dynamic scenes. We also show how we can compensate for scene and camera movement when creating an HDR still from a series of bracketed still photographs.",
        "address": "New York, NY, USA",
        "author": "Kang, Sing Bing and Uyttendaele, Matthew and Winder, Simon and Szeliski, Richard",
        "doi": "10.1145/882262.882270",
        "issn": "0730-0301",
        "issue_date": "July 2003",
        "journal": "ACM Trans. Graph.",
        "keywords": "tonemapping, image processing, high dynamic range, video processing",
        "month": "jul",
        "number": "3",
        "numpages": "7",
        "pages": "319\u2013325",
        "publisher": "Association for Computing Machinery",
        "title": "High Dynamic Range Video",
        "type": "article",
        "url": "https://doi.org/10.1145/882262.882270",
        "volume": "22",
        "year": "2003"
    },
    "L4": {
        "abstract": "Producing a high dynamic range (HDR) image from a set of images with different exposures is a challenging process for dynamic scenes. A category of existing techniques first register the input images to a reference image and then merge the aligned images into an HDR image. However, the artifacts of the registration usually appear as ghosting and tearing in the final HDR images. In this paper, we propose a learning-based approach to address this problem for dynamic scenes. We use a convolutional neural network (CNN) as our learning model and present and compare three different system architectures to model the HDR merge process. Furthermore, we create a large dataset of input LDR images and their corresponding ground truth HDR images to train our system. We demonstrate the performance of our system by producing high-quality HDR images from a set of three LDR images. Experimental results show that our method consistently produces better results than several state-of-the-art approaches on challenging scenes.",
        "address": "New York, NY, USA",
        "articleno": "144",
        "author": "Kalantari, Nima Khademi and Ramamoorthi, Ravi",
        "doi": "10.1145/3072959.3073609",
        "issn": "0730-0301",
        "issue_date": "August 2017",
        "journal": "ACM Trans. Graph.",
        "keywords": "high dynamic range imaging, convolutional neural network",
        "month": "jul",
        "number": "4",
        "numpages": "12",
        "publisher": "Association for Computing Machinery",
        "title": "Deep High Dynamic Range Imaging of Dynamic Scenes",
        "type": "article",
        "url": "https://doi.org/10.1145/3072959.3073609",
        "volume": "36",
        "year": "2017"
    },
    "L5": {
        "abstract": "This paper proposes the first non-flow-based deep frame- work for high dynamic range (HDR) imaging of dynamic scenes with large-scale foreground motions. In state-of-the-art deep HDR imag- ing, input images are first aligned using optical flows before merging, which are still error-prone due to occlusion and large motions. In stark contrast to flow-based methods, we formulate HDR imaging as an im- age translation problem without optical flows. Moreover, our simple translation network can automatically hallucinate plausible HDR details in the presence of total occlusion, saturation and under-exposure, which are otherwise almost impossible to recover by conventional optimization approaches. Our framework can also be extended for different reference images. We performed extensive qualitative and quantitative compar- isons to show that our approach produces excellent results where color artifacts and geometric distortions are significantly reduced compared to existing state-of-the-art methods, and is robust across various inputs, including images without radiometric calibration.",
        "archiveprefix": "arXiv",
        "author": "Shangzhe Wu and Jiarui Xu and Yu-Wing Tai and Chi-Keung Tang",
        "doi": "10.48550/arXiv.1711.08937",
        "eprint": "1711.08937",
        "keywords": "High Dynamic Range Imaging \u00b7 Computational Photogra- phy",
        "primaryclass": "cs.CV",
        "title": "Deep High Dynamic Range Imaging with Large Foreground Motions",
        "type": "misc",
        "url": "https://doi.org/10.48550/arXiv.1711.08937",
        "year": "2018"
    },
    "L6": {
        "abstract": "Adaptive histogram equalization (ahe) is a contrast enhancement method designed to be broadly applicable and having demonstrated effectiveness. However, slow speed and the overenhancement of noise it produces in relatively homogeneous regions are two problems. We report algorithms designed to overcome these and other concerns. These algorithms include interpolated ahe, to speed up the method on general purpose computers; a version of interpolated ahe designed to run in a few seconds on feedback processors; a version of full ahe designed to run in under one second on custom VLSI hardware; weighted ahe, designed to improve the quality of the result by emphasizing pixels' contribution to the histogram in relation to their nearness to the result pixel; and clipped ahe, designed to overcome the problem of overenhancement of noise contrast. We conclude that clipped ahe should become a method of choice in medical imaging and probably also in other areas of digital imaging, and that clipped ahe can be made adequately fast to be routinely applied in the normal display sequence.",
        "author": "Stephen M. Pizer and E. Philip Amburn and John D. Austin and Robert Cromartie and Ari Geselowitz and Trey Greer and Bart {ter Haar Romeny} and John B. Zimmerman and Karel Zuiderveld",
        "doi": "10.1016/S0734-189X(87)80186-X",
        "issn": "0734-189X",
        "journal": "Computer Vision, Graphics, and Image Processing",
        "number": "3",
        "pages": "355-368",
        "title": "Adaptive histogram equalization and its variations",
        "type": "article",
        "url": "https://doi.org/10.1016/S0734-189X(87)80186-X",
        "volume": "39",
        "year": "1987"
    },
    "L7": {
        "abstract": "Low-light image enhancement methods based on classic Retinex model attempt to manipulate the estimated illumination and to project it back to the corresponding reflectance. However, the model does not consider the noise, which inevitably exists in images captured in low-light conditions. In this paper, we propose the robust Retinex model, which additionally considers a noise map compared with the conventional Retinex model, to improve the performance of enhancing low-light images accompanied by intensive noise. Based on the robust Retinex model, we present an optimization function that includes novel regularization terms for the illumination and reflectance. Specifically, we use \u2113 1 norm to constrain the piece-wise smoothness of the illumination, adopt a fidelity term for gradients of the reflectance to reveal the structure details in low-light images, and make the first attempt to estimate a noise map out of the robust Retinex model. To effectively solve the optimization problem, we provide an augmented Lagrange multiplier based alternating direction minimization algorithm without logarithmic transformation. Experimental results demonstrate the effectiveness of the proposed method in low-light image enhancement. In addition, the proposed method can be generalized to handle a series of similar problems, such as the image enhancement for underwater or remote sensing and in hazy or dusty conditions.",
        "author": "Li, Mading and Liu, Jiaying and Yang, Wenhan and Sun, Xiaoyan and Guo, Zongming",
        "doi": "10.1109/TIP.2018.2810539",
        "journal": "IEEE Transactions on Image Processing",
        "keywords": "Low-light image enhancement, Retinex model, structure-revealing, noise suppression",
        "number": "6",
        "pages": "2828-2841",
        "title": "Structure-Revealing Low-Light Image Enhancement Via Robust Retinex Model",
        "type": "ARTICLE",
        "url": "https://doi.org/10.1109/TIP.2018.2810539",
        "volume": "27",
        "year": "2018"
    },
    "L8": {
        "abstract": "This paper presents a new neural network for enhancing underexposed photos. Instead of directly learning an image-to-image mapping as previous work, we introduce intermediate illumination in our network to associate the input with expected enhancement result, which augments the network's capability to learn complex photographic adjustment from expert-retouched input/output image pairs. Based on this model, we formulate a loss function that adopts constraints and priors on the illumination, prepare a new dataset of 3,000 underexposed image pairs, and train the network to effectively learn a rich variety of adjustment for diverse lighting conditions. By these means, our network is able to recover clear details, distinct contrast, and natural color in the enhancement results. We perform extensive experiments on the benchmark MIT-Adobe FiveK dataset and our new dataset, and show that our network is effective to deal with previously challenging images.",
        "author": "Wang, Ruixing and Zhang, Qing and Fu, Chi-Wing and Shen, Xiaoyong and Zheng, Wei-Shi and Jia, Jiaya",
        "booktitle": "2019 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        "doi": "10.1109/CVPR.2019.00701",
        "keywords": "",
        "number": "",
        "pages": "6842-6850",
        "title": "Underexposed Photo Enhancement Using Deep Illumination Estimation",
        "type": "INPROCEEDINGS",
        "url": "https://doi.org/10.1109/CVPR.2019.00701",
        "volume": "",
        "year": "2019"
    },
    "L9": {
        "abstract": "Deep learning-based methods have achieved remarkable success in image restoration and enhancement, but are they still competitive when there is a lack of paired training data? As one such example, this paper explores the low-light image enhancement problem, where in practice it is extremely challenging to simultaneously take a low-light and a normal-light photo of the same visual scene. We propose a highly effective unsupervised generative adversarial network, dubbed EnlightenGAN, that can be trained without low/normal-light image pairs, yet proves to generalize very well on various real-world test images. Instead of supervising the learning using ground truth data, we propose to regularize the unpaired training using the information extracted from the input itself, and benchmark a series of innovations for the low-light image enhancement problem, including a global-local discriminator structure, a self-regularized perceptual loss fusion, and the atten- tion mechanism. Through extensive experiments, our proposed approach outperforms recent methods under a variety of metrics in terms of visual quality and subjective user study. Thanks to the great flexibility brought by unpaired training, EnlightenGAN is demonstrated to be easily adaptable to enhancing real-world images from various domains. Our codes and pre-trained models are available at: https://github.com/VITA-Group/EnlightenGAN.",
        "archiveprefix": "arXiv",
        "author": "Yifan Jiang and Xinyu Gong and Ding Liu and Yu Cheng and Chen Fang and Xiaohui Shen and Jianchao Yang and Pan Zhou and Zhangyang Wang",
        "doi": "10.48550/arXiv.1906.06972",
        "eprint": "1906.06972",
        "keywords": "Low-light enhancement, generative adversarial networks, unsupervised learning",
        "primaryclass": "cs.CV",
        "title": "EnlightenGAN: Deep Light Enhancement without Paired Supervision",
        "type": "misc",
        "url": "https://doi.org/10.48550/arXiv.1906.06972",
        "year": "2021"
    }
};