"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 9.897c0 -1.714 1.46 -3.104 3.26 -3.104c.275 -1.22 1.255 -2.215 2.572 -2.611c1.317 -.397 2.77 -.134 3.811 .69c1.042 .822 1.514 2.08 1.239 3.3h.693a2.42 2.42 0 0 1 2.425 2.414a2.42 2.42 0 0 1 -2.425 2.414h-8.315c-1.8 0 -3.26 -1.39 -3.26 -3.103"}],["path",{"d":"M12 13v3"}],["path",{"d":"M10 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M14 18h7"}],["path",{"d":"M3 18h7"}]];
const rig: Rig[] = [{"fx":"float","n":[0,1,2,3,4],"o":[12,12]}];

export const CloudDataConnectionIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CloudDataConnectionIcon.displayName = "CloudDataConnectionIcon";
