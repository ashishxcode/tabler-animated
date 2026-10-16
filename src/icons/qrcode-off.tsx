"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 4h1a1 1 0 0 1 1 1v1m-.297 3.711a1 1 0 0 1 -.703 .289h-4a1 1 0 0 1 -1 -1v-4c0 -.275 .11 -.524 .29 -.705"}],["path",{"d":"M7 17v.01"}],["path",{"d":"M14 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"}],["path",{"d":"M7 7v.01"}],["path",{"d":"M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"}],["path",{"d":"M17 7v.01"}],["path",{"d":"M20 14v.01"}],["path",{"d":"M14 14v3"}],["path",{"d":"M14 20h3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[9],"o":[12,12],"dl":0.25},{"fx":"pop","n":[6,7,8],"o":[17,17],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,3,4,5],"a":0.22,"dl":0.1,"st":0.07,"os":[[7,7],[7,17.01],[17,7],[7,7.01],[7,17],[17,7.01]]}];

export const QrcodeOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
QrcodeOffIcon.displayName = "QrcodeOffIcon";
