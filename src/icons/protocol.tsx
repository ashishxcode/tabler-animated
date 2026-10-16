"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 6l-7 12"}],["path",{"d":"M20 6l-7 12"}],["path",{"d":"M5 14v.015"}],["path",{"d":"M5 10.015v.015"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[14,12],"a":0.06},{"fx":"pop","n":[2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,14.01],[5,10.02]]}];

export const ProtocolIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ProtocolIcon.displayName = "ProtocolIcon";
