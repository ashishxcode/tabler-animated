"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5"}],["path",{"d":"M14.984 13.307a3 3 0 1 0 -2.32 2.62"}],["path",{"d":"M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M17 21l4 -4"}]];
const rig: Rig[] = [{"fx":"draw","n":[2,3],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"pop","n":[1],"a":0.25,"st":0.08,"os":[[12,13]]},{"fx":"tilt","n":[0],"o":[12,12],"a":-3}];

export const CameraCancelIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CameraCancelIcon.displayName = "CameraCancelIcon";
