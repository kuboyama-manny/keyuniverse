import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Navigation/Breadcrumbs';

function PrivacyPolicy(props) {
  return (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-sm-8 m-auto">
            <Link to={'/'}>
              <Breadcrumbs content="Go back to the main page"/>
            </Link>
            <h4 className="mb-5">Privacy Policy</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum mattis nulla quis varius.
              Morbi vestibulum massa in risus lobortis hendrerit. Pellentesque suscipit, est eget laoreet dapibus,
              libero diam viverra nulla, vitae viverra est lorem porta sem. Praesent nunc ligula, iaculis quis enim sit
              amet, hendrerit ullamcorper quam. Praesent sed tempus tortor. Maecenas a dictum nunc. Nunc sed fermentum
              ipsum. Proin vel metus nec dolor tempus vulputate. Praesent nisl arcu, finibus ut euismod a, faucibus a
              neque. Etiam scelerisque nisl eros, vel maximus diam viverra in. Nulla hendrerit urna vitae lacus
              pellentesque, at rutrum quam viverra.</p>
            <p>Aenean a leo leo. Maecenas in rutrum urna, at ultrices mi. Cras et sem et velit viverra scelerisque id
              quis metus. Vestibulum varius rhoncus erat quis dictum. Vivamus eget fermentum lectus. Sed eu suscipit
              augue, eu tincidunt eros. Donec convallis, urna posuere interdum molestie, urna lorem tristique nibh,
              ultrices condimentum mi ligula vitae leo. Curabitur a tempor est. Sed id aliquet urna. Donec at facilisis
              libero, at facilisis ex. Curabitur congue, augue et lobortis gravida, erat lorem laoreet metus, ut
              malesuada mi arcu in mi. Fusce blandit a tellus a porttitor. Integer turpis sem, tincidunt quis nulla vel,
              tristique mollis tellus. Sed sollicitudin ligula sit amet ante tincidunt dapibus. Suspendisse nibh odio,
              facilisis sit amet sapien nec, tempus consequat enim. Donec consequat ex a mauris facilisis tempor.
              Curabitur sed suscipit urna. Mauris ac suscipit arcu, sed imperdiet ligula. Maecenas ligula justo, porta
              et augue nec, commodo molestie diam. Nam tellus odio, malesuada a imperdiet non, suscipit non ligula.</p>
            <p>Etiam quis bibendum elit, et viverra erat. Donec porttitor mattis lacus, non pharetra lorem rhoncus eget.
              Curabitur pharetra lacinia ipsum, sed varius urna eleifend et. Proin ornare purus vitae facilisis aliquet.
              Donec a tristique ligula. Donec luctus vitae elit nec rutrum. Morbi vitae felis vel lorem euismod viverra.
              Nam rutrum quam lectus, id consequat erat tristique quis. Etiam a dignissim quam. Nullam vitae mauris eget
              massa laoreet vehicula. Suspendisse accumsan lorem a eros dictum, quis efficitur neque iaculis. Donec
              dapibus condimentum vehicula. Sed a tellus volutpat, porta lorem vitae, fermentum quam.</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
