"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"}],["path",{"d":"M12 7v-4"}],["path",{"d":"M11 3h2"}],["path",{"d":"M15.536 8.464l2.828 -2.828"}],["path",{"d":"M17.657 4.929l1.414 1.414"}],["path",{"d":"M17 12h4"}],["path",{"d":"M21 11v2"}],["path",{"d":"M15.535 15.536l2.829 2.828"}],["path",{"d":"M19.071 17.657l-1.414 1.414"}],["path",{"d":"M12 17v4"}],["path",{"d":"M13 21h-2"}],["path",{"d":"M8.465 15.536l-2.829 2.828"}],["path",{"d":"M6.343 19.071l-1.413 -1.414"}],["path",{"d":"M7 12h-4"}],["path",{"d":"M3 13v-2"}],["path",{"d":"M8.464 8.464l-2.828 -2.828"}],["path",{"d":"M4.929 6.343l1.414 -1.413"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,5],[12,3],[16.95,7.05],[18.36,5.64],[19,12],[21,12],[16.95,16.95],[18.36,18.36],[12,19],[12,21],[7.05,16.95],[5.64,18.36],[5,12],[3,12],[7.05,7.05],[5.64,5.64]]}];

export const VirusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VirusIcon.displayName = "VirusIcon";
