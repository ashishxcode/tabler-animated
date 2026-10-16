"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1"}],["path",{"d":"M14.477 11.307a3 3 0 1 0 -2.477 4.693"}],["path",{"d":"M17 21v-6"}],["path",{"d":"M19 15v-1.5"}],["path",{"d":"M19 22.5v-1.5"}],["path",{"d":"M17 18h3"}],["path",{"d":"M19 18h.5a1.5 1.5 0 0 1 0 3h-3.5"}],["path",{"d":"M19 18h.5a1.5 1.5 0 0 0 0 -3h-3.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3,4,5,6,7],"o":[18.5,18],"a":0.35,"dl":0.2},{"fx":"pop","n":[1],"a":0.25,"st":0.08,"os":[[11.74,13]]},{"fx":"tilt","n":[0],"o":[12,12],"a":-3}];

export const CameraBitcoinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CameraBitcoinIcon.displayName = "CameraBitcoinIcon";
