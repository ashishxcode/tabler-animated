"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13.163 2.168l8.021 5.828c.694 .504 .984 1.397 .719 2.212l-3.064 9.43a1.978 1.978 0 0 1 -1.881 1.367h-9.916a1.978 1.978 0 0 1 -1.881 -1.367l-3.064 -9.43a1.978 1.978 0 0 1 .719 -2.212l8.021 -5.828a1.978 1.978 0 0 1 2.326 0"}],["path",{"d":"M15 8h.01"}],["path",{"d":"M4 15l4 -4c.928 -.893 2.072 -.893 3 0l5 5"}],["path",{"d":"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"a":0.25,"st":0.08,"os":[[10,13.17],[17,13.67]]},{"fx":"pop","n":[1],"o":[15.01,8],"a":0.35,"dl":0.12},{"fx":"tilt","n":[0],"o":[12,11.4],"a":-3}];

export const PhotoPentagonIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhotoPentagonIcon.displayName = "PhotoPentagonIcon";
