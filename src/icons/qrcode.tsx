"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"}],["path",{"d":"M7 17l0 .01"}],["path",{"d":"M14 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"}],["path",{"d":"M7 7l0 .01"}],["path",{"d":"M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"}],["path",{"d":"M17 7l0 .01"}],["path",{"d":"M14 14l3 0"}],["path",{"d":"M20 14l0 .01"}],["path",{"d":"M14 14l0 3"}],["path",{"d":"M14 20l3 0"}],["path",{"d":"M17 17l3 0"}],["path",{"d":"M20 17l0 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,2,4],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,3,5,6,7,8,9,10,11],"a":0.22,"dl":0.1,"st":0.07,"os":[[7,17.01],[7,7.01],[17,7.01],[15.5,14],[20,14.01],[14,15.5],[15.5,20],[18.5,17],[20,18.5]]}];

export const QrcodeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
QrcodeIcon.displayName = "QrcodeIcon";
