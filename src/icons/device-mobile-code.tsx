"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8"}],["path",{"d":"M20 21l2 -2l-2 -2"}],["path",{"d":"M17 17l-2 2l2 2"}],["path",{"d":"M11 4h2"}],["path",{"d":"M12 17v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[18.5,19],"a":0.35,"dl":0.2},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[3,4],"a":0.22,"dl":0.1,"st":0.07,"os":[[12,4],[12,17.01]]}];

export const DeviceMobileCodeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceMobileCodeIcon.displayName = "DeviceMobileCodeIcon";
