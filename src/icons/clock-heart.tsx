"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.956 11.107a9 9 0 1 0 -9.579 9.871"}],["path",{"d":"M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296"}],["path",{"d":"M12 7v5l.5 .5"}]];
const rig: Rig[] = [{"fx":"spin","n":[2],"o":[12,12],"a":360},{"fx":"pop","n":[0,1],"o":[12.5,12.5],"a":0.05}];

export const ClockHeartIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ClockHeartIcon.displayName = "ClockHeartIcon";
