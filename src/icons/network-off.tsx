"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6.528 6.536a6 6 0 0 0 7.942 7.933m2.247 -1.76a6 6 0 0 0 -8.427 -8.425"}],["path",{"d":"M12 3c1.333 .333 2 2.333 2 6c0 .337 -.006 .66 -.017 .968m-.55 3.473c-.333 .884 -.81 1.403 -1.433 1.559"}],["path",{"d":"M12 3c-.936 .234 -1.544 1.29 -1.822 3.167m-.16 3.838c.116 3.029 .776 4.695 1.982 4.995"}],["path",{"d":"M6 9h3m4 0h5"}],["path",{"d":"M3 20h7"}],["path",{"d":"M14 20h7"}],["path",{"d":"M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M12 15v3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[8],"o":[12,12],"dl":0.25},{"fx":"pop","n":[5],"o":[17.5,20],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,3,4,6,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,9],[13,9],[11.01,9],[12,9],[6.5,20],[12,20],[12,16.5]]}];

export const NetworkOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
NetworkOffIcon.displayName = "NetworkOffIcon";
