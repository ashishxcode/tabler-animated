"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7.5 19.794a9 9 0 1 0 9 -15.588a9 9 0 0 0 -9 15.588"}],["path",{"d":"M20.997 12a9 9 0 0 0 -8.997 9"}],["path",{"d":"M9.662 12.778a9 9 0 0 0 -6.643 -.27"}],["path",{"d":"M19.527 7.078a14 14 0 0 0 -12.45 12.458"}],["path",{"d":"M13.503 9.18a14 14 0 0 0 -9.033 -2.097"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12.05,12.03],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[16.5,16.5],[6.34,12.39],[13.3,13.31],[8.99,8.09]]}];

export const YarnIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
YarnIcon.displayName = "YarnIcon";
