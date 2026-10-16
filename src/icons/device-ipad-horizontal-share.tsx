"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12.5 20h-7.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7"}],["path",{"d":"M9 17h3"}],["path",{"d":"M16 22l5 -5"}],["path",{"d":"M21 21.5v-4.5h-4.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[18.5,19.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1],"a":0.22,"dl":0.1,"st":0.07,"os":[[10.5,17]]}];

export const DeviceIpadHorizontalShareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceIpadHorizontalShareIcon.displayName = "DeviceIpadHorizontalShareIcon";
