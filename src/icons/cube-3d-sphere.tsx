"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 17.6l-2 -1.1v-2.5"}],["path",{"d":"M4 10v-2.5l2 -1.1"}],["path",{"d":"M10 4.1l2 -1.1l2 1.1"}],["path",{"d":"M18 6.4l2 1.1v2.5"}],["path",{"d":"M20 14v2.5l-2 1.12"}],["path",{"d":"M14 19.9l-2 1.1l-2 -1.1"}],["path",{"d":"M12 12l2 -1.1"}],["path",{"d":"M18 8.6l2 -1.1"}],["path",{"d":"M12 12l0 2.5"}],["path",{"d":"M12 18.5l0 2.5"}],["path",{"d":"M12 12l-2 -1.12"}],["path",{"d":"M6 8.6l-2 -1.1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5],"o":[12,12],"a":0.06},{"fx":"pop","n":[6,7,8,9,10,11],"a":0.24,"dl":0.1,"st":0.07,"os":[[13,11.45],[19,8.05],[12,13.25],[12,19.75],[11,11.44],[5,8.05]]}];

export const Cube3dSphereIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Cube3dSphereIcon.displayName = "Cube3dSphereIcon";
