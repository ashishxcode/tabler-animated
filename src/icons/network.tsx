"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 9a6 6 0 1 0 12 0a6 6 0 0 0 -12 0"}],["path",{"d":"M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6"}],["path",{"d":"M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6"}],["path",{"d":"M6 9h12"}],["path",{"d":"M3 20h7"}],["path",{"d":"M14 20h7"}],["path",{"d":"M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M12 15v3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,9],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[13,9],[11,9],[12,9],[6.5,20],[17.5,20],[12,20],[12,16.5]]}];

export const NetworkIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
NetworkIcon.displayName = "NetworkIcon";
