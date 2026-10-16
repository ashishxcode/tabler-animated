"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 15c-2 0 -5 1 -5 5"}],["path",{"d":"M4 13a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2l0 -5"}],["path",{"d":"M4 7v-2a1 1 0 0 1 1 -1h2"}],["path",{"d":"M11 4h2"}],["path",{"d":"M17 4h2a1 1 0 0 1 1 1v2"}],["path",{"d":"M20 11v2"}],["path",{"d":"M20 17v2a1 1 0 0 1 -1 1h-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[8.5,15.5],"a":0.06},{"fx":"pop","n":[0,2,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[10.5,17.5],[5.5,5.5],[12,4],[18.5,5.5],[20,12],[18.5,18.5]]}];

export const ImageInPictureIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ImageInPictureIcon.displayName = "ImageInPictureIcon";
